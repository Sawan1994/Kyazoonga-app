import React, { Component } from 'react';
import { Header } from './Header/components/Header';
import { Carousel } from './Carousel/components/Carousel';
import { HotTicketsSection } from './HotTicketsSection/container/HotTickets';
import { BrowseCategories } from './CategoriesSection/containers/BrowseCategories';
import { Miscellaneous } from './Miscellaneous/components/Miscellaneous';
import { Feature } from './FeatureSection/components/Feature';
import { Footer } from './Footer/containers/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel/>
        <HotTicketsSection/>
        <BrowseCategories/>
        <Miscellaneous/>
        <Feature/>
        <Footer/>
      </div>
    );
  }
}

export default App;
