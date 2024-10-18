// src/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="/">Home</a></li>
        <li style={styles.navItem}><a href="/about">About</a></li>
        <li style={styles.navItem}><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0
  },
  navItem: {
    color: 'white'
  }
};

export default NavBar;
