import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from './axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'undifined',
      name: 'undifined',
      message: 'undifined',
      confirmation: ''
    };
  }

  contactForm = event => {
    event.preventDefault();
    let body = {
      email: this.state.email,
      name: this.state.name,
      message: this.state.message
    };
    axios({
      method: 'post',
      url: 'http://localhost:8080/contact',
      data: body
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ confirmation: 'Le message a bien été envoyé' });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id='page' className='container'>
        <h2 className='pt-4 text-center'>Nous contacter</h2>
        <Form onSubmit={this.contactForm}>
          <FormGroup>
            <Label className='pt-3' />
            <Input
              type='name'
              name='name'
              id='examplename'
              placeholder='Saisi ton nom'
            />
          </FormGroup>
          <FormGroup className='pt-4'>
            <Label className='Email' />
            <Input
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='Saisi ton mail'
            />
          </FormGroup>
          <FormGroup>
            <Label className='pt-4' />
            <Input
              className='pb-5'
              type='textarea'
              name='text'
              id='exampleText'
              placeholder='Saisi ton message'
            />
          </FormGroup>
          <FormGroup className='pt-3'>
            <Button type='submit'>Envoyer</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Contact;
