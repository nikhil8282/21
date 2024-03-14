import React from 'react'
import './home.css'
import Navbar from '../../components/homepage/Navbar/navbar';
import Banner from '../../components/homepage/Banner/banner';
import Know from '../../components/homepage/know about us/know';
import Footer from '../../components/homepage/footer/footer';
import Knowourprocess from '../../components/homepage/know our process/knowourprocess';
import Cardsinhome from '../../components/homepage/cardsinhome/cardsinhome'
import Explore from '../../components/homepage/explore/explore';
import Contactform from '../../components/homepage/contactform/contactform';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Explore />
            <Know />
            <Cardsinhome />
            <Knowourprocess />
            <Contactform />
            <Footer />
        </div>
    )
}

export default Home;
