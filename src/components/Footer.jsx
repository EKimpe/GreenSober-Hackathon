import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const closeBtn = (
      <button className='close text-white' onClick={this.toggle}>
        &times;
      </button>
    );
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className='modal-lg'
        >
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              voluptate tempora totam provident blanditiis assumenda, nobis non
              magnam illo dignissimos voluptatem quos quis earum repellat
              laboriosam. Suscipit distinctio quae voluptatem.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              sint harum aperiam cupiditate rem rerum debitis laudantium
              architecto soluta totam fugiat fuga ducimus ex, natus mollitia
              voluptatum nihil nesciunt quod?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              sint harum aperiam cupiditate rem rerum debitis laudantium
              architecto soluta totam fugiat fuga ducimus ex, natus mollitia
              voluptatum nihil nesciunt quod?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              sint harum aperiam cupiditate rem rerum debitis laudantium
              architecto soluta totam fugiat fuga ducimus ex, natus mollitia
              voluptatum nihil nesciunt quod?
            </p>
          </ModalBody>
          <ModalFooter className='movieModal'>
            <Button onClick={this.toggle} className='bg-dark text-white'>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <footer className='footer navbar-dark'>
          <div className='container-fluid'>
            <ul className='row align-items-center text-center d-flex list-unstyled justify-content-center pt-3 mb-0'>
              <li className='mb-2 col-xs-12 col-sm-2'>
                <a href='/'>
                  <img src='./img/Logo.png' alt='logo' />
                </a>
              </li>
              <li className='col-xs-12 col-sm-2 text-white mb-2'>
                <a
                  className='wild'
                  href='/contact'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Nous contacter
                </a>
              </li>
              <li
                className='col-xs-12 col-sm-2 text-white mb-2 cursor'
                onClick={this.toggle}
              >
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
      </div>
    );
  }
}

export default Footer;
