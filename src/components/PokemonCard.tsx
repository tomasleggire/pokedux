import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { PokemonType } from "../actions/types";

const PokemonCard = (props: PokemonType) => {
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
