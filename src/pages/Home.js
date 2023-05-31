import { Container, Row, Col } from 'reactstrap';
import { SubHeader } from '../components/SubHeader';
import UserRegisterForm from '../features/user/UserRegisterForm';
import introPhoto from '../app/assets/img/intro.png'


const Home = () => {
  return (
    <Container>
      <SubHeader current='Home' />
      <Row>
        <Col className='intro page-section'>
          <img className='intro-img img-fluid mb-3 mb-lg-0 rounded' src={introPhoto} alt='...' />
          <Col className='intro-text left-0 text-center bg-faded p-5 rounded'>
            <h2 className='section-heading mb-4'>
              <span className='section-heading-upper'>Learning & Performing</span>
              <span className='section-heading-lower'>Music</span>
            </h2>
            <p className='mb-3'>The Bayou City Federated Music Club promotes music learning. We are a member of the <a href='https://www.nfmc-music.org/' target='_blank' rel='noopener noreferrer'>National Federation of Music Clubs</a> and the <a href='https://www.texasfederation.org/' target='_blank' rel='noopener noreferrer'>Texas Federation of Music Clubs</a>. 500+ students participate in our festival each February and those that receive the highest grade are eligible to participate in the annual Texas State Music Festival.</p>
            <div className='intro-button mx-auto'>
              <UserRegisterForm />
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}
export default Home;