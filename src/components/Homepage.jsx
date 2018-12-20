import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div container-fluid>
        <div container-fluid id='bgHomepage'>
          <img id='backgroundImg' src='./bg-Homepage.jpg' alt='background' />
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-md-12'>
            <p>Chiffres-clés</p>
            <br />
            <p className='knowledge'>Le saviez-vous?</p>
          </div>
          <div className='col-lg-5 col-md-12'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              impedit vero deleniti pariatur necessitatibus laborum accusamus
              at, minima rem. Dolorum officiis, praesentium eius quis voluptatum
              eaque adipisci culpa ex consequatur.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi impedit vero deleniti pariatur
              necessitatibus laborum accusamus at, minima rem. Dolorum officiis,
              praesentium eius quis voluptatum eaque adipisci culpa ex
              consequatur.
            </p>
            <br />
            <button id='quizButton'>Accèdes au quiz</button>
          </div>
          <div className='col-lg-3 col-md-12'>
            <div id='lastTweet'>Derniers tweets</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
