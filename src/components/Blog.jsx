import React from 'react';
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
} from 'reactstrap';

const Example = props => {
  return (
    <Container>
      <Row>
        <Col>
          <CardDeck>
            <Card className='mt-5'>
              <CardImg
                top
                width='100%'
                src='./img/draw.jpg'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>
                  Développement durable et numérique : un impact qui n’est pas
                  virtuel
                </CardTitle>
                <CardText>
                  Bien que les révolutions technologiques puissent être perçus
                  comme des « alliés » du développement durable, il faut
                  néanmoins, souligner les risques que ces technologies
                  numériques peuvent engendrer, notamment au travers de leur
                  consommation d’énergie, et des ressources liées à leur
                  déploiement.
                </CardText>
                <Button>En savoir plus</Button>
              </CardBody>
            </Card>
            <Card className='mt-5'>
              <CardImg
                top
                width='100%'
                src='./img/phone.jpg'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>
                  Le terrible impact des smartphones sur l’environnement
                </CardTitle>
                <CardText>
                  Alors qu’il se vend près de 47 smartphones par seconde dans le
                  monde, cette production n’est pas sans conséquence sur la
                  planète.
                </CardText>
                <Button>En savoir plus</Button>
              </CardBody>
            </Card>
            <Card className='mt-5'>
              <CardImg
                top
                width='100%'
                src='./img/ville.jpg'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>Le terrible bilan carbone des smartphones</CardTitle>
                <CardText>
                  Les émissions de gaz à effet de serre (GES) des technologies
                  de l’information et de la communication ne cessent de
                  progresser, avec une mention toute particulière pour les
                  smartphones.
                </CardText>
                <Button>En savoir plus</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card className='mt-5 mb-5'>
              <CardImg
                top
                width='100%'
                src='./img/nope.jpg'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>Numérique : le grand gâchis énergétique</CardTitle>
                <CardText>
                  Ordinateurs, data centers, réseaux… engloutissent près de 10 %
                  de la consommation mondiale d’électricité. Et ce chiffre ne
                  cesse d’augmenter. S’il n’est évidemment pas question de se
                  passer des progrès apportés par le numérique, les
                  scientifiques pointent un mode de fonctionnement peu optimisé
                  et très énergivore. Cet article fait partie du Top 10 des
                  contenus les plus lus sur notre site cette année.
                </CardText>
                <Button>En savoir plus</Button>
              </CardBody>
            </Card>
            <Card className='mt-5 mb-5'>
              <CardImg
                top
                width='100%'
                src='./img/seven.jpg'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>Le numérique, c’est plus écologique ?</CardTitle>
                <CardText>
                  Abandonner les supports matériels et choisir le numérique,
                  est-ce la solution pour économiser les ressources naturelles ?
                  La réponse n’est pas évidente : si le papier consomme des
                  arbres, l’électronique utilise des métaux, du plastique, des
                  terres rares… Décryptage au cas par cas.
                </CardText>
                <Button>En savoir plus</Button>
              </CardBody>
            </Card>
            <Card className='mt-5 mb-5'>
              <CardImg
                top
                width='100%'
                src='./img/tree.jpg'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>
                  Fairphone, l’OVNI des smartphones, à l’assaut du grand public
                </CardTitle>
                <CardText>
                  Fairphone 2, un smartphone respectueux de l'environnement et
                  des personnes qui le fabriquent, est désormais distribué en
                  France via l'opérateur Orange. Conçu pour
                </CardText>
                <Button>En savoir plus</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
