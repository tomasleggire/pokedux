import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

interface MyProps {
  name: string;
  url: string;
}

const PokemonCard = (props: MyProps) => {
  return (
    <Card
      title={props.name}
      cover={<img src={props.url} alt={props.name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
