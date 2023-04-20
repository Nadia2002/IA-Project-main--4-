import React from 'react';
import Header from '../../routing/header';
import Main from '../../routing/main';
import Footer from '../../routing/footer';
const Home = () => {
  return (
    <>
      <Header/>
      <Main pagename="home page" / >
      <Footer/>
    </>
  );
}

export default Home;
