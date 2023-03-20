import NewsItem from "./Newsitem"
import sampleNews from "/Aryaan Vedak/Scrimba/newznow/samplenews.json"

import React, { Component } from 'react'

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=adf92ae1b5b7445a98a8665d84536d24"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
            <h2 style={{fontWeight: "bold"}}>Top Headlines</h2>
            
            <div className="row">
              {this.state.articles.map((item)=>{
                return <div className="col-md-3 col-sm-7">
                    <NewsItem
                      key={item.url}
                      className="news"
                      title={item.title ? item.title.slice(0,70) : ""}
                      description={item.description ? item.description.slice(0,120) : ""}
                      imageUrl={item.urlToImage ? item.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"}
                      newsUrl={item.url}
                    />
                  </div>
              })}
            </div>
        </div>
    )
  }
}

export default News