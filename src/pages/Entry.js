import { Container } from 'reactstrap';
import ItemsList from '../features/shop/ItemsList';
import { SubHeader } from '../components/SubHeader';

const Entry = () => {
  return (
    <Container>
      <SubHeader current='Festival Entry' />
      <ItemsList />
    </Container>
  );
};

export default Entry;