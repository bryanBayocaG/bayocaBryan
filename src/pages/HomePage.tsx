import HeroSection from '../components/sections/HeroSection/HeroSection'
import TechStackection from '../components/sections/TechStackSection/TechStackSection'
import ProjectSections from '../components/sections/ProjectSection/ProjectSections'
import Footer from '../components/Footer'
import MyPathSection from '../components/sections/MyPathSection/MyPathSection'
import { useLoadStore } from '../store'
import LoadingOverlay from './LoadingOverlay'

function HomePage() {
    const { isLoading } = useLoadStore();
    return (
        <>
            <main className="">
                <HeroSection />
                {isLoading ?
                    <LoadingOverlay />
                    :
                    <>
                        <TechStackection />
                        <MyPathSection />
                        <ProjectSections />
                        <Footer />
                    </>
                }
            </main>
        </>
    )
}

export default HomePage