import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './NavBar.scss'

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [togglerIsExpanded, setTogglerIsExpanded] = useState(false);
  const toggleMenu = () => setTogglerIsExpanded(prev => !prev)

  const onUpdateActiveLink = (section: string) => {
    setActiveLink(section)
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll)

    return window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container className='nav-container'>
        <Navbar.Brand href="#home">CADUCODER</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-expanded={togglerIsExpanded}
          onClick={toggleMenu}
        >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Início
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projetos
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
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
            <button className="vvd"><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;