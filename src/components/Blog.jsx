import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
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
          <CardGroup>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://i.pinimg.com/564x/19/17/51/191751b40a4010018962f748b814abe3.jpg"
                alt="Card image cap"
              />
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
                src="https://i.pinimg.com/564x/19/17/51/191751b40a4010018962f748b814abe3.jpg"
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
                src="https://i.pinimg.com/564x/19/17/51/191751b40a4010018962f748b814abe3.jpg"
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
          </CardGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://i.pinimg.com/564x/19/17/51/191751b40a4010018962f748b814abe3.jpg"
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
              <CardImg
                top
                width="100%"
                src="https://i.pinimg.com/564x/19/17/51/191751b40a4010018962f748b814abe3.jpg"
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
              <CardImg
                top
                width="100%"
                src="https://i.pinimg.com/564x/19/17/51/191751b40a4010018962f748b814abe3.jpg"
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
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
