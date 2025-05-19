import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ProjectSections from '../components/sections/ProjectSections'
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