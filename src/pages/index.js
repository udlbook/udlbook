import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection';
import NotebookSection from '../components/Notebooks'
import InstructorsSection from '../components/Instructors';
import Footer from '../components/Footer';
import MediaSection from '../components/Media';
import MoreSection from '../components/More';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return ( 
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <NotebookSection/>
            <InstructorsSection/>
            <MediaSection/>
            <MoreSection/>
            <Footer/>                
        </>
    )
};

export default Home

 