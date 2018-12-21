import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./Quiz.css";
import { quiz } from "./questions";
import { answer } from "./answer";
import { Slide } from "react-slideshow-image";

const fadeImages = [
  "../img/retouchefairphone-2.png",
  "../img/retouchexperia-xa.png",
  "../img/retouchexperia-l.png",
  "../img/retoucheiphone-7.png",
  "../img/retoucheiphone-se.png",
  "../img/retoucheP10-Lite.png",
  "../img/retoucheXZ1.png",
  "../img/retoucheiPhoneX.png",
  "../img/retoucheiPhone8Plus.png",
  "../img/retoucheiPhoneXsMax.png"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1: answer.smartphone10,
      answer2: answer.smartphone9,
      answer3: answer.smartphone8,
      answer4: answer.smartphone7,
      answer5: answer.smartphone6,
      answer6: answer.smartphone5,
      answer7: answer.smartphone4,
      answer8: answer.smartphone3,
      answer9: answer.smartphone2,
      answer10: answer.smartphone1,
      questions: quiz.questions,
      currentQuestion: 0,
      currentPoint: 0,
      nbPoints: 0,
      isFinished: false,
      finalAnswer: []
    };
  }

  nextQuestion = () => {
    if (this.state.currentQuestion !== 9) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        nbPoints: this.state.nbPoints + this.state.currentPoint
      });
    } else {
      this.setState(
        {
          isFinished: true
        },
        () => {
          this.getFinalAnswer();
        }
      );
    }
  };

  getNbPoints = answer => {
    this.setState({
      currentPoint: answer.point
    });
  };

  getFinalAnswer = () => {
    let score = this.state.nbPoints;
    if (score >= 20 && score < 26) {
      this.setState({
        finalAnswer: this.state.answer1
      });
    }
    if (score >= 26 && score < 32) {
      this.setState({
        finalAnswer: this.state.answer2
      });
    }
    if (score >= 32 && score < 38) {
      this.setState({
        finalAnswer: this.state.answer3
      });
    }
    if (score >= 38 && score < 44) {
      this.setState({
        finalAnswer: this.state.answer4
      });
    }
    if (score >= 44 && score < 50) {
      this.setState({
        finalAnswer: this.state.answer5
      });
    }
    if (score >= 50 && score < 56) {
      this.setState({
        finalAnswer: this.state.answer6
      });
    }
    if (score >= 56 && score < 60) {
      this.setState({
        finalAnswer: this.state.answer7
      });
    }
    if (score >= 60 && score < 66) {
      this.setState({
        finalAnswer: this.state.answer8
      });
    }
    if (score >= 66 && score <= 72) {
      this.setState({
        finalAnswer: this.state.answer9
      });
    }
    if (score >= 74 && score <= 80) {
      this.setState({
        finalAnswer: this.state.answer10
      });
    }
  };

  render() {
    return (
      <div className="quiz">
        <h2 className="mb-5 mt-3">
          Voici notre sélection des 10 smartphones les plus écologiques du
          marché
        </h2>
        <Container className="slide">
          <Slide {...properties}>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} width="300" height="300" alt="phone" />
                <img
                  src={fadeImages[1]}
                  width="300"
                  height="300"
                  alt="phone1"
                />
                <img
                  src={fadeImages[2]}
                  width="300"
                  height="300"
                  alt="phone2"
                />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src={fadeImages[3]}
                  width="300"
                  height="300"
                  alt="phone3"
                />
                <img
                  src={fadeImages[4]}
                  width="300"
                  height="300"
                  alt="phone4"
                />
                <img
                  src={fadeImages[5]}
                  width="300"
                  height="300"
                  alt="phone5"
                />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src={fadeImages[6]}
                  width="300"
                  height="300"
                  alt="phone6"
                />
                <img
                  src={fadeImages[7]}
                  width="300"
                  height="300"
                  alt="phone7"
                />
                <img
                  src={fadeImages[8]}
                  width="300"
                  height="300"
                  alt="phone8"
                />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src={fadeImages[9]}
                  width="300"
                  height="300"
                  alt="phone9"
                />
              </div>
            </div>
          </Slide>
        </Container>
        <hr />
        <Row>
          <Col className="m-4" md={{ size: 12 }}>
            <h3>Nous allons t'aider à choisir ton futur smartphone écolo :</h3>
          </Col>
        </Row>
        {this.state.isFinished === false ? (
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <div className="cardQuestions">
                <Form>
                  <Label className="questionLabel">
                    {this.state.questions[this.state.currentQuestion].question}
                  </Label>
                  <Col md={{ size: 9, offset: 3 }}>
                    {this.state.questions[
                      this.state.currentQuestion
                    ].answers.map(answer => {
                      return (
                        <FormGroup check className="answers" key={answer.label}>
                          <Label>
                            <Input
                              type="checkbox"
                              name="radio"
                              onClick={() => {
                                this.getNbPoints(answer);
                              }}
                            />
                            {answer.label}
                          </Label>
                        </FormGroup>
                      );
                    })}
                  </Col>
                  <Button onClick={this.nextQuestion} className="nextQuestion">
                    <i className="fas fa-angle-right" /> Question suivante
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        ) : (
          <div>
            <Row className="d-flex">
              {this.state.finalAnswer.map(answer => {
                console.log(answer.image);
                return (
                  <div className="toto" key={answer.id}>
                    <img
                      src={answer.image}
                      width="300"
                      height="300"
                      alt="smartphone"
                    />
                    <div className="details">
                      <p>
                        Il s'agit d'un {answer.marque}, de {answer.constructeur}
                        .
                      </p>
                      <ul className="list-unstyled">
                        <li>Date de sortie : {answer.dateSortie}</li>
                        <li>
                          Système d'exploitation : {answer.systemeExploitation}
                        </li>
                        <li>Prix : {answer.prixProduit}</li>
                        <li>
                          Prix de la consommation sur 2 ans :{" "}
                          {answer.prixConsommationsSur2Ans}
                        </li>
                        <li>Note générale : {answer.noteGenerale}</li>
                        <li>
                          Note impact environnemental :{" "}
                          {answer.noteImpactEnvironnemental}
                        </li>
                        <li>
                          Note consommation énergétique :{" "}
                          {answer.noteConsommationEnergie}
                        </li>
                        <li>
                          Note consommation énergétique :{" "}
                          {answer.noteConsommationEnergie}
                        </li>
                      </ul>
                      <p>Les + :</p>
                      <ul>
                        <li>{answer.lesPlus[0]}</li>
                        <li>{answer.lesPlus[1]}</li>
                      </ul>
                      <p>Les - :</p>
                      <ul>
                        <li>{answer.lesMoins[0]}</li>
                        <li>{answer.lesMoins[1]}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
