import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

const Example = props => {
  return (
    <Container>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <CardImg top width="100%" src="./draw.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>
                  Développement durable et numérique : un impact qui n’est pas
                  virtuel
                </CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Bien que les révolutions technologiques puissent être perçus
                  comme des « alliés » du développement durable, il faut
                  néanmoins, souligner les risques que ces technologies
                  numériques peuvent engendrer, notamment au travers de leur
                  consommation d’énergie, et des ressources liées à leur
                  déploiement.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="./phone.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  Le terrible impact des smartphones sur l’environnement
                </CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Alors qu’il se vend près de 47 smartphones par seconde dans le
                  monde, cette production n’est pas sans conséquence sur la
                  planète.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="./ville.jpg"
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
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <CardImg top width="100%" src="./nope.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="./seven.jpg"
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
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="./tree.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
