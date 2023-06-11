import { Container, Row } from "reactstrap";
import { cartQuantitySelector, cartTotalSelector } from "./cartSlice";
import { useSelector } from "react-redux";
import GooglePay from "./GooglePay";

const Total = () => {
  const cartQuantity = useSelector(cartQuantitySelector);
  const cartTotal = useSelector(cartTotalSelector);


  if (cartQuantity === 0) {
    return (
      <Container className="total bg-faded">
        <h5>YOUR CART IS EMPTY</h5>
      </Container>
    )
  } return (
    <Container className="total bg-faded">
      <h5>ORDER SUMMARY</h5>
      <Row>
        <p className="total-p">
          Total ({cartQuantity} {cartQuantity === 1 ? 'item' : 'items'})
          : <strong>${cartTotal}</strong>
        </p>
      </Row>
      <GooglePay />
    </Container>
  )
}

export default Total