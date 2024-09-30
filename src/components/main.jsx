import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Revenues from './Revenues';
import Understanding from './Understanding';
import Members from './Members';
import Review from './Review';
import Footer from './footer';
import Digital from './Digital';







function Main() {
    return(
        <div className='bg-black overflow-hidden'>
            <Home />
            <About />
            <Services />
            <Revenues />
            <Understanding />
            {/* <Members /> */}
            <Review />
            <Digital />
            <Footer /> 
           
            
           
        </div>
    );

}
export default Main;