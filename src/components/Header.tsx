import Link from 'next/link';
import { Nav, Navbar } from 'reactstrap';

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref className="navbar-brand">
        Início
      </Link>
      <Nav className='flex-row' navbar>
        <Link href="/products" className='nav-link me-2' passHref>
          Produtos

        </Link>
        <Link href="/cart" passHref className='nav-link'>
          Carrinho

        </Link>
      </Nav>
    </Navbar>
  )
}
export default Header