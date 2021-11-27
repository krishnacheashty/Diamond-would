import * as React from 'react';
import { Container } from '@mui/material';
import Banner from '../Banner/Banner';
import Reviews from '../reviews/Reviews';
import Upcoming from '../Upcoming/Upcoming';
import NavbarTop from '../../sheared/navigation/NavbarTop';
import Footer from '../../sheared/Footer/Footer';
import Services from '../Products/Services';



const Home = () => {
    return (
        <Container>
            <NavbarTop></NavbarTop>
            <Banner></Banner>
            <Services></Services>
            
            <Reviews></Reviews>
            <Upcoming></Upcoming>
            <Footer></Footer>
            
        </Container>
    );
};

export default Home;