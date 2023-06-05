import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const ItemCard = ({ item }) => {
    const { id, image, name, price } = item;
    const dispatch = useDispatch();

    return (
        <Card>
            <Link to={`${id}`}>
                <CardImg width='100%' src={image} alt={name} />
            </Link>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <div className='d-grid gap-2'>
                    <Button
                        className='btn btn-outline-warning btn-block'
                        onClick={() =>
                            dispatch(addToCart({
                                id, name, image, price
                            }))
                        }
                    >Add to Cart<span className='position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle'>${price}</span>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default ItemCard;