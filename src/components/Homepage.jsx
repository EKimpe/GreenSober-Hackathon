import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div container-fluid>
        <img className='img-fluid' src='./bg-Homepage.jpg' alt='cook' />
        <div className='row text-center'>
          <div className='col-lg-3'>
            <p>Chiffres-clés</p>
            <br />
            <p className='knowledge'>Le saviez-vous?</p>
          </div>
          <div className='col-lg-6'>
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
            <button id='quizButton' className='mb-4 mt-1'>
              Accèdes au quiz
            </button>
          </div>
          <div className='col-lg-3'>
            <div id='lastTweet'>Derniers tweets</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
