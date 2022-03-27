import { NavbarProps } from '../types';

export function Navbar({ handleLogin }: NavbarProps) {
  return (
    <nav className='navbar'>
      <div className='nav-content container'>
        <a href='https://ccrsxx.github.io/simple-library'>Library</a>
        <button className='btn login' type='button' onClick={handleLogin}>
          Log in
        </button>
      </div>
    </nav>
  );
}
