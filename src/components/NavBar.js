import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import styles from './NavBar.module.css';

export default function NavBar() {
  const logout = useLogout();
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>Money Track</li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Register</Link></li>
            <li>
              <button className='btn' onClick={logout}>Logout</button>
            </li>
        </ul>
    </nav>
  )
}
