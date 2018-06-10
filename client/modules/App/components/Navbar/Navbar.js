import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Navbar.css';

const Navbar = (props, context) => {
  return (
    <div className={styles['page-switcher']}>
      <ul>
        <li><Link to="/home" activeClassName={styles.selected}>
          <FormattedMessage id="homePage" />
        </Link></li>
        <li><IndexLink to="/" activeClassName={styles.selected}>
          <FormattedMessage id="postsPage" />
        </IndexLink></li>
        <li><Link to="/about" activeClassName={styles.selected}>
          <FormattedMessage id="aboutPage" />
        </Link></li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
};

export default Navbar;
