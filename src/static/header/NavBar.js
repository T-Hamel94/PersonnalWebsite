import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  const { t } = useTranslation('navbar');

  return (
    <Navbar collapseOnSelect expand="lg"  variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-auto" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link className='nav-link'>
            <NavLink exact to="/" activeClassName="active">{t('home')}</NavLink>
          </Nav.Link>
          <Nav.Link className='nav-link'>
            <NavLink to="/about" activeClassName="active">{t('about')}</NavLink>
          </Nav.Link>
          <Nav.Link className='nav-link'>
            <NavLink to="/contact" activeClassName="active">{t('contact')}</NavLink>
          </Nav.Link>
          <Nav.Link className='nav-link'>
            <NavLink to="/blog" activeClassName="active">{t('blog')}</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
