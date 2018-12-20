import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import './Quiz.css';
import { quiz } from './questions';
import { Slide } from 'react-slideshow-image';

const fadeImages = [
  'https://www.ordissimo.fr/698-large_default/smartphone-ordissimo-LeNumeroUn.jpg',
  'https://www.ordissimo.fr/698-large_default/smartphone-ordissimo-LeNumeroUn.jpg',
  'https://www.ordissimo.fr/698-large_default/smartphone-ordissimo-LeNumeroUn.jpg'
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
      questions: quiz.questions,
      currentQuestion: 0,
      currentPoint: 0,
      nbPoints: 0,
      isFinished: false,
      finalAnswer: undefined
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
        finalAnswer: 'Smartphone 1'
      });
    }
    if (score >= 26 && score < 32) {
      this.setState({
        finalAnswer: 'Smartphone 2'
      });
    }
    if (score >= 32 && score < 38) {
      this.setState({
        finalAnswer: 'Smartphone 3'
      });
    }
    if (score >= 38 && score < 44) {
      this.setState({
        finalAnswer: 'Smartphone 4'
      });
    }
    if (score >= 44 && score < 50) {
      this.setState({
        finalAnswer: 'Smartphone 5'
      });
    }
    if (score >= 50 && score < 56) {
      this.setState({
        finalAnswer: 'Smartphone 6'
      });
    }
    if (score >= 56 && score < 60) {
      this.setState({
        finalAnswer: 'Smartphone 7'
      });
    }
    if (score >= 60 && score < 66) {
      this.setState({
        finalAnswer: 'Smartphone 8'
      });
    }
    if (score >= 66 && score <= 72) {
      this.setState({
        finalAnswer: 'Smartphone 9'
      });
    }
    if (score >= 74 && score <= 80) {
      this.setState({
        finalAnswer: 'Smartphone 10'
      });
    }
  };

  render() {
    return (
      <div className='quiz'>
        <h2 className='mb-5 mt-3'>
          Voici notre sélection des 10 smartphones les plus écologiques du
          marché
        </h2>
        <Container className='slide'>
          <Slide {...properties}>
            <div className='each-fade'>
              <div className='image-container'>
                <img src={fadeImages[0]} width='300' height='300' alt='phone' />
                <img src={fadeImages[0]} width='300' height='300' alt='phone' />
                <img src={fadeImages[0]} width='300' height='300' alt='phone' />
              </div>
            </div>
            <div className='each-fade'>
              <div className='image-container'>
                <img src={fadeImages[1]} width='300' height='300' alt='phone' />
                <img src={fadeImages[1]} width='300' height='300' alt='phone' />
                <img src={fadeImages[1]} width='300' height='300' alt='phone' />
              </div>
            </div>
            <div className='each-fade'>
              <div className='image-container'>
                <img src={fadeImages[2]} width='300' height='300' alt='phone' />
                <img src={fadeImages[2]} width='300' height='300' alt='phone' />
                <img src={fadeImages[2]} width='300' height='300' alt='phone' />
              </div>
            </div>
          </Slide>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col className='m-4' md={{ size: 12 }}>
              <h3>
                Nous allons t'aider à choisir ton futur smartphone écolo :
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <div className='cardQuestions rounded'>
                {this.state.isFinished === false ? (
                  <Form>
                    <Label className='questionLabel'>
                      {
                        this.state.questions[this.state.currentQuestion]
                          .question
                      }
                    </Label>
                    <Col md={{ size: 9, offset: 3 }}>
                      {this.state.questions[
                        this.state.currentQuestion
                      ].answers.map(answer => {
                        return (
                          <FormGroup
                            check
                            className='answers'
                            key={answer.label}
                          >
                            <Label>
                              <Input
<<<<<<< HEAD
                                type="checkbox"
                                name="radio"
=======
                                type='radio'
                                name='radio'
>>>>>>> c89a53cd5fbbccf0c7647c11cf521dc0aabea3f2
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
                    <Button
                      onClick={this.nextQuestion}
                      className='nextQuestion'
                    >
                      <i className='fas fa-angle-right' /> Question suivante
                    </Button>
                  </Form>
                ) : (
                  <div className="smartphoneResult">
                    <h4>Félicitations ! Voici ton futur smartphone : </h4>
                    <Col md={{ size: 4 }}>
                      <img
                        src={fadeImages[2]}
                        width="300"
                        height="300"
                        alt="smartphone"
                      />
                    </Col>
                    <Col md={{ size: 4 }}>
                      <p>Il s'agit d'un BLABLABLA, de BLABLABLA.</p>
                      <ul>
                        <li>Date de sortie :</li>
                        <li>Note général :</li>
                        <li>Note énergétique :</li>
                        <li>Note impact environnemental :</li>
                      </ul>
                      <p>Les + :</p>
                      <ul>
                        <li>Blabla</li>
                        <li>Blabla</li>
                      </ul>
                      <p>Les - :</p>
                      <ul>
                        <li>Blabla</li>
                        <li>Blabla</li>
                      </ul>
                    </Col>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Quiz;
