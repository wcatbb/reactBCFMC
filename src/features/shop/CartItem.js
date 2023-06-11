import { Container } from 'reactstrap';
import { increaseQuantity, decreaseQuantity, removeItem } from '../shop/cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({ id, image, name, price, quantity = 0 }) {
  const dispatch = useDispatch()

  return (
    <Container className='cartItem'>
      <img className='cartItem-image' src={image} alt='item' />
      <div className='cartItem-info'>
        <p className='cartItem-title'>{name}</p>
        <p className='cartItem-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem-incrDec'>
          <button onClick={() => dispatch(decreaseQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(increaseQuantity(id))}>+</button>
        </div>
        <button
          className='fa fa-lg fa-trash cartItem-removeButton'
          onClick={() => dispatch(removeItem(id))}> Remove
        </button>
      </div>
    </Container>
  )
}

export default CartItem