import { Container, Row } from 'reactstrap';
import { increaseQuantity, decreaseQuantity, removeItem } from '../shop/cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({id, image, name, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <Container className="cartItem">
      <img className="cartItem__image" src={image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{name}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decreaseQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(increaseQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </Container>
  )
}

export default CartItem