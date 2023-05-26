import CartItem from '../features/shop/CartItem';
import Total from '../components/Total';
import { Container, Row, Col } from 'reactstrap';
import { SubHeader } from '../components/SubHeader';
import { useSelector } from 'react-redux';


const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)
  const itemInCart = cart.length > 0;

  if (!itemInCart) {
    return (
      <Container>
        <SubHeader current='Cart' />
        <Total />
      </Container>
    )
  } return (
    <Container>
      <SubHeader current='Cart' />
      <Row className='cart'>
        <Col className='cart-left'>
          {cart?.map((item) => (
            <CartItem
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </Col>
        <Col className='cart-right mt-4'>
          <Total />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;