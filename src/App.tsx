import Header from "./components/Header"
import AboutSection from "./components/sections/AboutSection"
import HeroSection from "./components/sections/HeroSection"

function App() {

  return (
    <div className="dark:bg-[#0f172a] h-screen">
      <Header />
      <main className="">
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  )
}

export default App
