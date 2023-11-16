import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

interface Props {
  name: string;
  image: string;
}

const PokemonCard = (props: Props) => {
  return (
    <Card
      title={props.name}
      cover={<img src={props.image} alt={props.name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
