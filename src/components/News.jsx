import NewsItem from "./Newsitem"

const News = () => {
    return (
        <div className="container my-3">
            <div className="row">

                <div className="col">
                    <NewsItem
                        className="news"
                        title="Title of news"
                        description="Description of the news"
                    />
                </div>

                <div className="col">
                    <NewsItem
                        className="news"
                        title="Title of news"
                        description="Description of the news"
                    />
                </div>

                <div className="col">
                    <NewsItem
                        className="news"
                        title="Title of news"
                        description="Description of the news"
                    />
                </div>

            </div>

            <div className="row">

                <div className="col">
                    <NewsItem
                        className="news"
                        title="Title of news"
                        description="Description of the news"
                    />
                </div>

                <div className="col">
                    <NewsItem
                        className="news"
                        title="Title of news"
                        description="Description of the news"
                    />
                </div>

                <div className="col">
                    <NewsItem
                        className="news"
                        title="Title of news"
                        description="Description of the news"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default News