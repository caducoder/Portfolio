import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import Spline from '@splinetool/react-spline';
import './Banner.scss'

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Front-End Developer", "Software Developer"]
  const [text, setText] = useState("text");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText == fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className="banner" id="home">
      <Container className='xl'>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} lg={6}>
            <span className="tagline">Bem-vindo ao meu Portfólio</span>
            <h1>{`Olá, Eu sou o Carlos`} <br /><span className='wrap'>{text}&nbsp;</span></h1>
            <p>
              Entusiasta do desenvolvimento Front-end com foco especializado em React.js e Javascript/Typescript.
              Minha jornada no mundo da programação começou com a fascinação pela criação de interfaces dinâmicas e interativas,
              o que me impulsionou a buscar e aprimorar minhas habilidades nesta área.
            </p>
            <button onClick={() => console.log('connect')} className='btn btn-dark'>
              Let's connect <FontAwesomeIcon icon={faArrowCircleRight} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5} lg={6}>
            {/* <img src={Avatar} alt="Avatar" /> */}
            <Spline className='spline' scene="https://prod.spline.design/4ZtXiZQGWE3bEwqB/scene.splinecode" />
          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default Banner;