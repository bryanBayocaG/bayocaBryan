
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <div className="dark:bg-[#18191B] h-screen relative text-neutral-600 dark:text-white">
      {/*  <div className="dark:bg-[#18191B] h-screen"> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
