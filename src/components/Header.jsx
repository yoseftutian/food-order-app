import { useContext } from "react";
import logoimg from "../assets/logo.jpg";
import Button from "./UI/button";
import CartContext from "../store/CartContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart({totalCartItems})</Button>
      </nav>
    </header>
  );
}
