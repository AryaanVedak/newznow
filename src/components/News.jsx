import NewsItem from "./Newsitem"
import { Button } from 'antd';

import React, { Component } from 'react'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=adf92ae1b5b7445a98a8665d84536d24&page=1&pageSize=20"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles })
  }

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=adf92ae1b5b7445a98a8665d84536d24&page=${this.state.page + 1}&pageSize=20`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
    console.log("Next")
  }

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=adf92ae1b5b7445a98a8665d84536d24&page=${this.state.page - 1}&pageSize=20`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
    console.log("Previous")
  }

  render() {
    return (
      <div className="container my-3">
        <h2 style={{ fontWeight: "bold" }}>Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((item) => {
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
          <Button size="large" disabled={this.state.page <= 1} onClick={this.handlePrev}>&larr; Previous</Button>
          <Button className="next-but" size="large" disabled={this.state.page >= 2} onClick={this.handleNext}>Next &rarr;</Button>
        </div>

      </div>
    )
  }
}

export default News