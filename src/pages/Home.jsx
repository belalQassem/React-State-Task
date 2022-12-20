import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import Total from '../Total/index';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        {/* <Header/>
        <Card/>
        <Footer/> */}
        <Counter step ="1"/>
        <Counter step ="7" />
        <Counter step ="10" />
        <Counter step ="80"/>
        <Total/>
      </div>
    );
  }
}

export default HomePage;