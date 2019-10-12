import React from 'react';

import './styles.scss';

const Footer = ({ children }) => (
  <footer className='footer'>
    <a href='/'>Terminos de uso</a>
    <a href='/'>Declaración de privacidad</a>
    <a href='/'>Centro de ayuda</a>
  </footer>
);

export default Footer;
