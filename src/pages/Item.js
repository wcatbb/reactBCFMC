import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectItemById } from '../features/shop/itemsSlice';
import ItemDetail from '../features/shop/ItemDetail';
import { SubHeader } from '../components/SubHeader';

const Item = () => {
    const { itemId } = useParams();
    const item = selectItemById(itemId);

    return (
        <Container>
            <SubHeader current={item.name} />
            <Row>
                <ItemDetail item={item} />
            </Row>
        </Container>
    );
};

export default Item;