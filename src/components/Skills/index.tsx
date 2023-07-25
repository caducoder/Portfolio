import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skills from './skills.json'

import './Skills.scss'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Skills() {
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>Ferramentas e tecnologias utilizadas no dia a dia</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
                removeArrowOnDeviceType={["tablet", "mobile"]}
                autoPlay
                autoPlaySpeed={5000}
              >
                {skills.map(skill => (
                  <div className='item'>
                    <img src={skill.src} alt={skill.alt} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;