import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "./axios";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      name: undefined,
      message: undefined,
      confirmation: ""
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
      method: "post",
      url: "http://localhost:8080/contact",
      data: body
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ confirmation: "Le message a bien été envoyé" });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="page" className="container contact">
        <h2 className="pt-4 text-center titi">Nous contacter</h2>
        <Form onSubmit={this.contactForm} className="formulaire p-5 m-5">
          <FormGroup>
            <Input
              type="name"
              name="name"
              id="examplename"
              placeholder="Saisi ton nom"
              className="pb-5"
            />
          </FormGroup>
          <FormGroup className="pt-4">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Saisi ton mail"
              className="pb-5 pt-5"
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="pb-5 mb-5 pt-5"
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Saisi ton message"
            />
          </FormGroup>
          <FormGroup className="pt-5 mb-5">
            <button type="submit">Envoyer</button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Contact;
