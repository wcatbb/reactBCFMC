import { Container } from 'reactstrap';
import OfficersList from '../features/officers/OfficersList';
import { SubHeader } from '../components/SubHeader';

const About = () => {
  return (
    <Container>
      <SubHeader current='Officers' />
      <OfficersList />
    </Container>
  );
};

export default About;