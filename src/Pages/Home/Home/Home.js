import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NavTop from '../../Shared/NavTop/NavTop';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Feature from '../Feature/Feature';
import Launch from '../Launch/Launch';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavTop/>
            <Navigation/>
            <Banner/>
            <Feature/>
            <Services/>
            <Pricing/>
            <Launch/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default Home;