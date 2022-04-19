import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Feature from '../Feature/Feature';
import Launch from '../Launch/Launch';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Feature/>
            <Services/>
            <Pricing/>
            <Launch/>
            <Faq/>
        </div>
    );
};

export default Home;