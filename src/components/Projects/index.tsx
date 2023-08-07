import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import { useGithubAutomatedRepos, StackIcon, IGithubRepos } from 'github-automated-repos/index';
import "./Projects.scss"

const IMAGE_URL = "https://raw.githubusercontent.com/caducoder"

function Projects() {
  const { dataReposGithub } = useGithubAutomatedRepos()
  const [repository, setRepository] = useState<IGithubRepos[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/caducoder/repos')
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
              <Stack className="project-stack" gap={4}>
                {repository.map((item) => {
                  return (
                    <Card key={item.id} style={{ padding: 0 }} bg="dark" >
                      <Card.Img
                        variant="top"
                        src={`${IMAGE_URL}/${item.name}/main/public/${item.name.toLowerCase()}-preview.png`}
                        className="card-img"
                      />
                      <Card.Body>

                        <Card.Text>
                          {item.description}
                        </Card.Text>

                        <Card.Link href={item.homepage} target="_blank">Website</Card.Link>
                        <Card.Link href={item.html_url} target="_blank">Repositório</Card.Link>

                      </Card.Body>
                      <Card.Footer>

                        {item.topics.map((icon) => {
                          return (
                            <StackIcon key={icon} className="stack_Icon" iconItem={icon} />
                          )
                        })}

                      </Card.Footer>
                    </Card>
                  )
                })}
              </Stack>

            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;