import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://static.hubzum.zumst.com/hubzum/2018/02%2F05%2F10%2F00ada3e050e9403ba3214006a9e2b5fe.jpg',
  },
  {
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
  },
  {
    name: 'Doncasu',
    image: 'http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
  },
  {
    name: 'Kimbap',
    image: 'https://t1.daumcdn.net/news/202211/21/moneyweek/20221121182836765ezcf.jpg',
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
