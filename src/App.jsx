import React from 'react';

import Header from './common/components/Header';
import Search from './common/components/Search';
import Categories from './common/components/Categories';
import Carousel from './common/components/Carousel';
import CarouselItem from './common/components/CarouselItem';
import Footer from './common/components/Footer';

import './assets/styles/app.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Search />
    <Categories title='Mi Lista'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Categories title='Trending'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Categories title='Hot'>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
