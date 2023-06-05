import CartItem from '../features/shop/CartItem';
import Total from '../features/shop/Total';
import { Container, Row, Col, Button } from 'reactstrap';
import { SubHeader } from '../components/SubHeader';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../features/shop/cartSlice';


const Cart = () => {
  const cart = useSelector((state) => state.cart.products)
  const dispatch = useDispatch();
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
          {cart.map((item) => (
            <CartItem
              id={item.id}
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <Button
            className='btn btn-outline-warning mt-2'
            style={{ width: 180, height: 'auto', margin: 20 }}
            onClick={() =>
              dispatch(emptyCart())
            }
          >Empty Cart
          </Button>
        </Col>
        <Col className='cart-right mt-2'>
          <Total />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;