import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectAllItems } from './itemsSlice';
import ItemCard from './ItemCard';

const ItemsList = () => {
    const items = useSelector(selectAllItems);

    return (
        <Row className='ms-auto'>
            {items.map((item) => {
                return (
                    <Col
                        xs='4'
                        className='m-2 mx-auto'
                        key={item.id}>
                        <ItemCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ItemsList;