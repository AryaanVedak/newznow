import { Card } from "antd";
const { Meta } = Card;
const NewsItem = ({title, description,imageUrl}) => (
  <Card
    hoverable
    style={{
      width: 240,
      height: 400,
      overflow: "hidden",
      marginBottom: 20
    }}
    cover={
      <img
        alt="example"
        src={imageUrl}
      />
    }
  >
    <Meta title={title} description={description} />
    onClick={}
  </Card>
);

export default NewsItem;
