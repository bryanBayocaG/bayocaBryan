import HeroSection from '../components/sections/HeroSection/HeroSection'
import TechStackection from '../components/sections/TechStackSection/TechStackSection'
import ProjectSections from '../components/sections/ProjectSection/ProjectSections'
import Footer from '../components/Footer'

function HomePage() {
    return (
        <>
            <main className="">
                <HeroSection />
                <TechStackection />
                <ProjectSections />
            </main>
            <Footer />
        </>
    )
}

export default HomePage