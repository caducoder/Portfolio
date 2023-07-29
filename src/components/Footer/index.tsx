import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <Container className="xl">
        <Row className='pt-4'>
          <Col>
            <p className='py-4 h2'>CADUCODER</p>
          </Col>
          <Col className='py-4 text-end'>
            <div className="social-icon">
              <a href="https://github.com/caducoder" target='_blank'>
                <FontAwesomeIcon icon={faGithub} inverse className='icon' />
              </a>
              <a href="https://www.linkedin.com/in/carloseduardodev/" target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} inverse className='icon' />
              </a>
              <a href="https://twitter.com/Carlosxti" target='_blank'>
                <FontAwesomeIcon icon={faTwitter} inverse className='icon' />
              </a>
            </div>
            <p className='text-secondary mt-4'>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;