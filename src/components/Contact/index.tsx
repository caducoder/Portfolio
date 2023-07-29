import { SubmitHandler, useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.scss'

interface FormInputs {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
}

function Contact() {
  const { register, handleSubmit } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
  }

  return (
    <section className='contact' id="connect">
      <Container className="xl">
        <Row className='align-items-center'>
          <Col md={6} >
            <img src="https://fakeimg.pl/350x200/?text=Hello" alt="Entre em contato" />
          </Col>
          <Col md={6} className='form-column'>
            <h2>Contato</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
              <Row>
                <Col sm={6} className='p-2'>
                  <label htmlFor="firstName">Primeiro Nome *</label>
                  <input type='text' {...register("firstName")} />
                </Col>
                <Col sm={6} className='p-2'>
                  <label htmlFor="lastName">Último Nome</label>
                  <input type='text' {...register("lastName")} />
                </Col>
                <Col sm={6} className='p-2'>
                  <label htmlFor="email">Email *</label>
                  <input type='email' {...register("email")} />
                </Col>
                <Col sm={6} className='p-2'>
                  <label htmlFor="phone">Telefone Celular</label>
                  <input type='tel' {...register("phone")} />
                </Col>
                <Col className='message-box p-2' >
                  <label htmlFor="message">Mensagem *</label>
                  <textarea rows={6}  {...register("message")} />
                  <button type="submit">Enviar</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;