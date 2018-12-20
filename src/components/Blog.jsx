import React, { Component } from "react";
import "./Blog.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
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
      <CardDeck>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              Développement durable et numérique : un impact qui n’est pas
              virtuel
            </CardTitle>
            <CardSubtitle>...</CardSubtitle>
            <CardText>
              Bien que les révolutions technologiques puissent être perçus comme
              des « alliés » du développement durable, il faut néanmoins,
              souligner les risques que ces technologies numériques peuvent
              engendrer, notamment au travers de leur consommation d’énergie, et
              des ressources liées à leur déploiement.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              Le terrible impact des smartphones sur l’environnement
            </CardTitle>
            <CardSubtitle>...</CardSubtitle>
            <CardText>
              Alors qu’il se vend près de 47 smartphones par seconde dans le
              monde, cette production n’est pas sans conséquence sur la planète
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle> Le terrible bilan carbone des smartphones</CardTitle>
            <CardSubtitle>...</CardSubtitle>
            <CardText>
              Les émissions de gaz à effet de serre (GES) des technologies de
              l’information et de la communication ne cessent de progresser,
              avec une mention toute particulière pour les smartphones.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle> Numérique : le grand gâchis énergétique</CardTitle>
            <CardSubtitle>...</CardSubtitle>
            <CardText>
              Ordinateurs, data centers, réseaux… engloutissent près de 10 % de
              la consommation mondiale d’électricité. Et ce chiffre ne cesse
              d’augmenter. S’il n’est évidemment pas question de se passer des
              progrès apportés par le numérique, les scientifiques pointent un
              mode de fonctionnement peu optimisé et très énergivore. Cet
              article fait partie du Top 10 des contenus les plus lus sur notre
              site cette année.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Le numérique, c’est plus écologique ?</CardTitle>
            <CardSubtitle>...</CardSubtitle>
            <CardText>
              Abandonner les supports matériels et choisir le numérique, est-ce
              la solution pour économiser les ressources naturelles ? La réponse
              n’est pas évidente : si le papier consomme des arbres,
              l’électronique utilise des métaux, du plastique, des terres rares…
              Décryptage au cas par cas.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    );
  }
}

export default Blog;
