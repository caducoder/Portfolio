import { SubmitHandler, useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import { useState } from 'react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILS_PUBLIC_KEY

interface FormInputs {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
}

function Contact() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    sendEmail(data)
  }

  const sendEmail = (params: FormInputs) => {
    const templateParams = {
      user_name: `${params.firstName} ${params.lastName ?? ''}`,
      user_email: params.email,
      phone: params.phone ?? 'Não informado',
      message: params.message
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        reset()
        successfulEmailSend()
      }, (error) => {
        console.log(error.text);
      });
  };

  const successfulEmailSend = () => {
    setIsButtonActive(true);

    setTimeout(() => {
      setIsButtonActive(false);
    }, 2000);
  }

  return (
    <section className='contact' id="connect">
      <Container className="xl">
        <Row className='align-items-center'>
          <Col md={6} >
            <img
              className='invert'
              src="svgs/person-illustration.svg"
              alt="Entre em contato"
            />
          </Col>
          <Col md={6} className='form-column'>
            <h2>Contato</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
              <Row>
                <Col sm={6} className='p-2'>
                  <label htmlFor="firstName">Primeiro Nome *</label>
                  <input required type='text' {...register("firstName")} />
                </Col>
                <Col sm={6} className='p-2'>
                  <label htmlFor="lastName">Último Nome</label>
                  <input type='text' {...register("lastName")} />
                </Col>
                <Col sm={6} className='p-2'>
                  <label htmlFor="email">Email *</label>
                  <input required type='email' {...register("email")} />
                </Col>
                <Col sm={6} className='p-2'>
                  <label htmlFor="phone">Telefone Celular</label>
                  <input type='tel' {...register("phone")} />
                </Col>
                <Col className='message-box p-2' >
                  <label htmlFor="message">Mensagem *</label>
                  <textarea required rows={6}  {...register("message")} />
                  <button className={`${isButtonActive ? 'success' : ''}`} type="submit">Enviar</button>
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