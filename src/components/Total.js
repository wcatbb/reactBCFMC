import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

const Total = () => {
  const cart = useSelector((state) => state.cart.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  const totalItems = getTotal().totalQuantity;

  if (totalItems === 0) {
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
          Total ({totalItems} items)
          : <strong>${getTotal().totalPrice}</strong>
        </p>
      </Row>
    </Container>
  )
}

export default Total