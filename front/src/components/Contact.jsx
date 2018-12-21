import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: undefined,
        name: undefined,
        message: undefined,
        confirmation: ""
      }
    };
  }

  contactForm = event => {
    event.preventDefault();
    let body = {
      email: this.state.fields.email,
      name: this.state.fields.name,
      message: this.state.fields.message
    };
    axios({
      method: "post",
      url: "http://localhost:8080/contact",
      data: body
    })
      .then(res => {
        if (res.status === 200) {
          let fields = {};
          fields["email"] = "";
          fields["message"] = "";
          fields["name"] = "";
          this.setState({
            confirmation: (
              <p className="confirm">Le message a bien été envoyé</p>
            ),
            fields: fields
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  render() {
    return (
      <div id="page" className="container contact">
        <h2 className="pt-5 pb-5 text-center">Nous contacter</h2>
        <Form onSubmit={this.contactForm}>
          <FormGroup>
            <Label className="pt-3" />
            <Input
              type="name"
              name="name"
              id="examplename"
              placeholder="Saisis ton nom"
              onChange={this.handleChange}
              value={this.state.fields.name || ""}
            />
          </FormGroup>
          <FormGroup className="pt-4">
            <Label className="Email" />
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Saisis ton mail"
              onChange={this.handleChange}
              value={this.state.fields.email || ""}
            />
          </FormGroup>
          <FormGroup>
            <Label className="pt-4" />
            <Input
              className="pb-5"
              type="textarea"
              name="message"
              id="exampleText"
              placeholder="Saisis ton message"
              onChange={this.handleChange}
              value={this.state.fields.message || ""}
            />
          </FormGroup>
          <FormGroup className="pt-3">
            <Button type="submit">Envoyer</Button>
          </FormGroup>
        </Form>
        {this.state.confirmation}
      </div>
    );
  }
}

export default Contact;
