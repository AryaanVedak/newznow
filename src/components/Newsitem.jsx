import { Card } from "antd";
import { Button } from 'antd';
const { Meta } = Card;



const NewsItem = ({title, description,imageUrl,newsUrl}) => (
  <div>
    <Card
      className="card"
      hoverable
      style={{
        height: 370,
        overflow: "hidden",
        marginBottom: 20,
      }}
      cover={
        <img
          alt="example"
          src={imageUrl}
          style={{height: 140}}
        />
      }
    >
      <Meta title={title} description={description} />
      <Button 
        type="primary" 
        size="middle" 
        className="readmore"
      >
        <a href={newsUrl} target="_blank" className="but-link">Read More</a>
      </Button>
    </Card>
  </div>
);

export default NewsItem;
