import NewsItem from "./Newsitem"
import Spinner from "./spinner";
import { Button } from 'antd';
import PropTypes from 'prop-types';

import React, { Component, useState, useEffect } from 'react'

const News = ({pageSize,country,category}) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=adf92ae1b5b7445a98a8665d84536d24&page=1&pageSize=${pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    console.log(parsedData.articles)
  }

  useEffect(() => {
    updateData();
  },[])
  

  const handleNext = async () => {
    if (page + 1 > Math.ceil(totalResults / pageSize)) {
    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=adf92ae1b5b7445a98a8665d84536d24&page=${page + 1}&pageSize=${pageSize}`
      setLoading(true)
      let data = await fetch(url)
      let parsedData = await data.json()
      setPage(page + 1)
      setArticles(parsedData.articles)
      setLoading(false)
      console.log("Next")
    }
  }

  const handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=adf92ae1b5b7445a98a8665d84536d24&page=${page - 1}&pageSize=${pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setPage(page - 1)
    setArticles(parsedData.articles)
    setLoading(false)
    console.log("Previous")
  }
    return (
      <div className="container my-3">
        <h2 style={{ fontWeight: "bold" }}>Top Headlines</h2>
        <div className="spin-container">
          {loading && <Spinner/>}
        </div>
        <div className="row">
          {!loading && articles.map((item) => {
            return <div className="col-md-3 col-sm-7">
              <NewsItem
                key={item.url}
                className="news"
                title={item.title ? item.title.slice(0, 70) : ""}
                description={item.description ? item.description.slice(0, 120) : ""}
                imageUrl={item.urlToImage ? item.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"}
                newsUrl={item.url}
              />
            </div>
          })}
        </div>
        <div className="pagination">
          <Button size="large" disabled={page <= 1} onClick={handlePrev}>&larr; Previous</Button>
          <Button disabled={page + 1 > Math.ceil(totalResults / pageSize)} className="next-but" size="large" onClick={handleNext}>Next &rarr;</Button>
        </div>

      </div>
    )
}

export default News

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}