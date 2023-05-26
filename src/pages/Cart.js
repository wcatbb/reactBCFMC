import CartItem from "../features/shop/CartItem";
import Total from "../components/Total";
import { Container, Row, Col } from "reactstrap";
import { SubHeader } from "../components/SubHeader";
import { useSelector } from "react-redux";


const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)

  return (
    <Container>
      <SubHeader current='Cart' />
      <Row className="cart">
        <Col className="cart__left">
          <div>
            {cart?.map((item) => (
              <CartItem
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </Col>
        <Col className="cart__right mt-4">
          <Total />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;