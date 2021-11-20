import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Cart from "./Cart";
// import Shopping from "./displayProducts";

const Nav = (props) => {
  const tValue = props.finalitems.map((Value) => {
    return Value.value;
  });
  let totalValue = 0;
  for (let i = 0; i < tValue.length; i++) {
    totalValue += tValue[i];
  }
  tValue.reduce((totalValue, tValue) => totalValue + tValue, 0);
  console.log(totalValue);

  return (
    <div id="header">
      <Link to="/">
        <div>
          <h1>Shop 2 </h1>
          <div className="circle">R</div>
          <h1>eact</h1>
        </div>
      </Link>

      <div id="total-items">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </Link>
        <span> {totalValue} items</span>
      </div>
    </div>
  );
};

export default Nav;
