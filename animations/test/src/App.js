import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Error from "./components/error/Error"
import Text_img from './components/pages/text_img/Text_img';
import Footer from "../src/components/layout/footer/Footer.jsx"
import Navbar from "../src/components/layout/navbar/Navbar.jsx"
import Animationsvg from "../src/components/pages/animationsvg/Animationsvg.jsx"
const App =()=>{
return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' exact element={<Text_img/>} />
        <Route path='/animationsvg' exact element={<Animationsvg/>} />
        <Route path='*' exact element={<Error/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    )
}
export default App;