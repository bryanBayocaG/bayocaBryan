
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    /*<div className="h-screen relative text-neutral-600 dark:text-white bg-[#f7f7f7] dark:bg-[#0f172a]"> */
    <>
      <BrowserRouter  >
        <div className=" text-neutral-600 dark:text-white bg-[#f7f7f7] dark:bg-[#0f172a]">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter >
    </>
    /*</div>*/
  )
}

export default App
