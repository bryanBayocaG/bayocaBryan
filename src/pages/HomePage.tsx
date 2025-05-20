import HeroSection from '../components/sections/HeroSection/HeroSection'
import AboutSection from '../components/sections/AboutSection/AboutSection'
import ProjectSections from '../components/sections/ProjectSection/ProjectSections'
import Footer from '../components/Footer'

function HomePage() {
    return (
        <>
            <main className="">
                <HeroSection />
                <AboutSection />
                <ProjectSections />
            </main>
            <Footer />
        </>
    )
}

export default HomePage