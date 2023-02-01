import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>Money Track</li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Register</Link></li>
        </ul>
    </nav>
  )
}
