import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <>
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h1>BookStore CMS</h1>
        <ul className={styles.navlinks}>
          <li className={styles.links}>
            <Link to="/">Books</Link>
          </li>
          <li className={styles.linksCat}>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
      <div className={styles.profile}>
        <CgProfile />
      </div>
    </nav>
  </>
);

export default Navbar;
