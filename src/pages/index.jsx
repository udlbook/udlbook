import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstructorsSection from "@/components/Instructors";
import MediaSection from "@/components/Media";
import MoreSection from "@/components/More";
import Navbar from "@/components/Navbar";
import NotebookSection from "@/components/Notebooks";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Index() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((p) => !p);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <NotebookSection />
            <InstructorsSection />
            <MediaSection />
            <MoreSection />
            <Footer />
        </>
    );
}
