import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Stack, Button } from "react-bootstrap";
import { useGithubAutomatedRepos, StackIcon, IGithubRepos } from 'github-automated-repos/index';
import "./Projects.scss"

const IMAGE_URL = "https://raw.githubusercontent.com/caducoder"

function Projects() {
  const { dataReposGithub } = useGithubAutomatedRepos()
  const [repository, setRepository] = useState<IGithubRepos[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/caducoder/repos?sort=created&per_page=999')
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'deployed')));
  }, [])

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
            <Container>
              <Row xs={1} md={2} lg={3} className="g-4">
                {repository.map((item) => {
                  return (
                    <Col key={item.id}>
                      <Card  style={{ padding: 0, height: 525 }} bg="dark" >
                        <Card.Img
                          variant="top"
                          src={`${IMAGE_URL}/${item.name}/main/public/${item.name.toLowerCase()}-preview.png`}
                          className="card-img"
                        />
                        <Card.Body className="d-flex flex-column justify-content-between">

                          <Card.Text>
                            {item.description}
                          </Card.Text>
                          <div>
                          <Card.Link href={item.homepage} target="_blank">
                            <Button>
                              Website
                            </Button>
                          </Card.Link>
                          <Card.Link href={item.html_url} target="_blank">
                            <Button>
                              Repositório
                            </Button>
                          </Card.Link>
                          </div>

                        </Card.Body>
                        <Card.Footer >

                          {item.topics.map((icon) => {
                            
                            return icon !== 'deployed' ? (
                              <StackIcon key={icon} className="stack_Icon pe-2" iconItem={icon} />
                            ) : null
                          })}

                        </Card.Footer>
                      </Card>
                    </Col>
                  )
                })}
              </Row>

            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;