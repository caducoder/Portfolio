import { Container, Row, Col, Tab, Tabs, Stack } from "react-bootstrap";
import "./Projects.scss"

function Projects() {
  return (
    <section className="project" id="projects">
      <Container className="xl">
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Durante minha carreira, tive o privilégio de trabalhar em diversos projetos desafiadores,
              que me permitiram aprimorar minhas habilidades em React.js, uma das mais poderosas bibliotecas
              para construção de interfaces modernas.
            </p>
            <Tabs
              defaultActiveKey="first"
              id="uncontrolled-tab-example"
              className="mb-3"

            >
              <Tab eventKey="first" title="Tab One" >
                <Container>
                  <Row xs={1} md={3}>
                    <Col className="d-flex justify-content-center my-3">
                      <img className="img-fluid" src="https://fakeimg.pl/300/?text=Projeto 1" alt="" />
                    </Col>
                    <Col className="d-flex justify-content-center my-3">
                      <img className="img-fluid" src="https://fakeimg.pl/300/?text=Projeto 2" alt="" />
                    </Col>
                    <Col className="d-flex justify-content-center my-3">
                      <img className="img-fluid" src="https://fakeimg.pl/300/?text=Projeto 3" alt="" />
                    </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="second" title="Tab Two">
                <Container>
                  <Row xs={1} md={3}>
                    <Col className="d-flex justify-content-center my-3">
                      <img className="img-fluid" src="https://fakeimg.pl/300/?text=Projeto 1" alt="" />
                    </Col>
                    <Col className="d-flex justify-content-center my-3">
                      <img className="img-fluid" src="https://fakeimg.pl/300/?text=Projeto 2" alt="" />
                    </Col>
                    <Col className="d-flex justify-content-center my-3">
                      <img className="img-fluid" src="https://fakeimg.pl/300/?text=Projeto 3" alt="" />
                    </Col>
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;