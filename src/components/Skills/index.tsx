import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Javascript from '../../assets/img/js.svg'
import React from '../../assets/img/react.svg'
import HTML from '../../assets/img/html.svg'
import CSS from '../../assets/img/css.svg'
import Java from '../../assets/img/java.svg'
import Git from '../../assets/img/git.svg'
import Docker from '../../assets/img/docker.svg'
import Sass from '../../assets/img/sass.svg'
import Linux from '../../assets/img/linux.svg'
import Firebase from '../../assets/img/firebase.svg'
import Typescript from '../../assets/img/typescript.svg'
import Postgres from '../../assets/img/postgres.svg'

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
                <div className="item">
                  <img src={HTML} alt="Skill Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={CSS} alt="Skill Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={Javascript} alt="Skill Image" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={Typescript} alt="Skill Image" />
                  <h5>TYPESCRIPT</h5>
                </div>
                <div className="item">
                  <img src={React} alt="Skill Image" />
                  <h5>REACTJS</h5>
                </div>
                <div className="item">
                  <img src={Java} alt="Skill Image" />
                  <h5>JAVA</h5>
                </div>
                <div className="item">
                  <img src={Git} alt="Skill Image" />
                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <img src={Docker} alt="Skill Image" />
                  <h5>DOCKER</h5>
                </div>
                <div className="item">
                  <img src={Sass} alt="Skill Image" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={Linux} alt="Skill Image" />
                  <h5>LINUX</h5>
                </div>
                <div className="item">
                  <img src={Firebase} alt="Skill Image" />
                  <h5>FIREBASE</h5>
                </div>
                <div className="item">
                  <img src={Postgres} alt="Skill Image" />
                  <h5>POSTGRES</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;