import HeroSection from '../components/sections/HeroSection/HeroSection'
import TechStackection from '../components/sections/TechStackSection/TechStackSection'
import ProjectSections from '../components/sections/ProjectSection/ProjectSections'
import Footer from '../components/Footer'
import AboutSection from '../components/sections/AboutSection/AboutSection'

function HomePage() {
    return (
        <>
            <main className="">
                <HeroSection />
                <TechStackection />
                <AboutSection />
                <ProjectSections />
            </main>
            <Footer />
        </>
    )
}

export default HomePage