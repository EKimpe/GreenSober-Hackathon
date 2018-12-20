import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updatePage = () => {
    this.props.history.push('/quiz');
  };

  render() {
    return (
      <div container-fluid='true'>
        <img
          className='img-fluid bg-img'
          src='./bg-Homepage.jpg'
          alt='background'
        />
        <div className='row text-center'>
          <div className='col-lg-3 pt-5'>
            <p className='approach'>Chiffres-clés</p>
            <p>Le smartphone c'est aussi :</p>
            <ul id='keynumbers'>
              <li>11% de la consommation énergétique mondiale</li>
              <li>3% des émissions carbone de la planète</li>
              <li>22% de notre pollution quotidienne</li>
            </ul>
            <p className='knowledge'>Le saviez-vous?</p>
            <p>
              Recycler un smartphone permet d’économiser 70 kg de ressources
              naturelles
            </p>
          </div>
          <div className='col-lg-6 pt-5'>
            <p>
              On oublie trop souvent que la transition numérique, engagée depuis
              plusieurs années, a une empreinte environnementale colossale.
              L’impact écologique du numérique n’est plus à prouver, bien qu’il
              soit encore assez méconnu du grand public. De plus en plus
              gourmand en énergie, le numérique est également vorace en
              différents matériaux qui polluent, chacun à sa manière.
            </p>
            <br />
            <p className='approach'>Notre démarche ?</p>
            <br />
            <p>
              Le Smartphone est l’outil que vous avez toujours dans la poche, à
              portée de main. Mais saviez-vous que la manière dont il est
              produit et dont vous l’utilisez peut impacter l’environnement ?
            </p>
            <br />
            <p>
              SoberGreen est là pour vous aider à acheter le Smartphone qui
              correspond le mieux à vos besoins parmi ceux qui sont les plus
              durables sur le marché actuel !
            </p>
            <br />
            <button
              onClick={this.updatePage}
              id='quizButton'
              className='mb-4 mt-1'
            >
              Accède au quiz
            </button>
          </div>
          <div className='col-lg-3 pt-5'>
            <div>
              <TwitterTimelineEmbed
                sourceType='profile'
                screenName='green_sober'
                options={{ height: 800, width: 400 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
