import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/index'
import AboutUs from './pages/sections/AboutUs/index'
import Homepage from './pages/sections/Home/index'


function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} /> 
          <Route path='/about' element={<AboutUs />  } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
