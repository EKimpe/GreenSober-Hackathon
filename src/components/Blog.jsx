import React, { Component } from "react";
import "./Blog.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        {" "}
        <img
          width="50%"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOY5rw5r75nou9jD3CCpPe8Yr7aGbT-RABf6mpsBU3OxtJYsUq7Q"
          alt="cook"
        />
        <CardGroup>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOPqEpxTtyNVUodrPdq92YPTHD2ZeLhA_KJYWWrxLSIvlKxK3OQ"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button onClick={this.toggle}>
                {this.props.buttonLabel}
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>
                      Do Something
                    </Button>{" "}
                    <Button color="secondary" onClick={this.toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqD9WzDXO1YH24yZkRY7doFm9C9RL2QAJ5pj5H3Bw_IBHS0Fp9w"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="data:image/jpeg;base64,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"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Blog;
