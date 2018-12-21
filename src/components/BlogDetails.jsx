import React from 'react';

const BlogDetails = props => {
  return (
    <div className='container-fluid'>
      <div className='details'>
        <p className='pt-3 text-center blogTitle'>
          Le terrible impact des smartphones sur l’environnement
        </p>
        <img
          className='float pt-3 pl-2 mr-4 img-fluid'
          src='./img/city.jpg'
          alt='City'
        />
        <p className='pt-3'>
          Devenu un objet dont on peut difficilement se passer, le smartphone
          voit ses ventes croître de manière fulgurante depuis plus d'une
          décennie. En 2017, près de 1.5 milliard de smartphones ont ainsi été
          vendus, soit 2,7% de plus qu'en 2016 (1). D'ici quelques années, le
          nombre de smartphones pourrait même dépasser celui des ordinateurs de
          bureau et des ordinateurs portables.
        </p>
        <br />
        <p>
          Malheureusement, cette production et consommation de smartphones a des
          conséquences néfastes sur la planète. Quels sont exactement les
          impacts d'un smartphone sur l'environnement ? Que peut faire le
          consommateur pour limiter les dégâts ?
        </p>
        <br />
        <p>
          <strong>L'impact du smartphone sur le dérèglement climatique</strong>
        </p>
        <br />
        <p>
          Si les ventes de téléphones portables par millions à l'échelle
          mondiale ont de quoi satisfaire les opérateurs, notre planète, elle,
          se désole. Car contrairement à leur impact sur la santé qui divise
          encore les scientifiques, l'impact des smartphones sur l'environnement
          ne laisse plus de place à l'interprétation. Malgré leur petite
          dimension, les téléphones portables dernier cri sont de gros
          consommateurs d'énergie et de matériaux rares ou toxiques.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
