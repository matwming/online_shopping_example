import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import Link from "next/link";
import formatMoney from "../lib/formatMoney";
export default class item extends Component {
 static propTypes = {
  //   item: PropTypes.shape({
  //    title: PropTypes.string.isRequired,
  //    price: PropTypes.number.isRequired
  //   })
  item: PropTypes.object.isRequired
 };

 render() {
  const { item } = this.props;

  return (
   <ItemStyles>
    {item.image && <img src={item.image} alt={item.title} />}
    <Title>
     <Link
      href={{
       pathname: "/item",
       query: {
        id: item.id
       }
      }}
     >
      <a>{item.title}</a>
     </Link>
    </Title>
    <PriceTag>{formatMoney(item.price)}</PriceTag>
    <p>{item.description}</p>
    <div className="buttonList">
     <Link href={{ pathname: "update", query: { id: item.id } }}>
      <a>Edit</a>
     </Link>
     <button>Add to Cart</button>
     <button>Delete</button>
    </div>
   </ItemStyles>
  );
 }
}
