import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className='footer navbar-dark'>
      <div className='container-fluid'>
        <ul className='row align-items-center text-center d-flex list-unstyled justify-content-center pt-3 mb-0'>
          <li className='mb-2 col-xs-12 col-sm-2'>
            <a href='/'>
              <img src='./img/Logo.png' alt='logo' />
            </a>
          </li>
          <li className='col-xs-12 col-sm-2 text-white mb-2'>Nous contacter</li>
          <li className='col-xs-12 col-sm-2 text-white mb-2'>
            Mention Légales
          </li>
          <li className='col-xs-12 col-sm-2 text-white'>
            <a
              className='wild'
              href='https://wildcodeschool.fr/lille/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Made with <span className='heart'>♥</span> by Wild Code School
            </a>
          </li>
          <li className='col-xs-12 col-sm-2 text-white'>
            <SocialIcon url='https://twitter.com/green_sober' />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
