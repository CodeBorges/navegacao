import './Content.css'
import React from "react";
import { Routes, Route } from 'react-router-dom' //Switch na V6 do react foi trocado por Routes
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';


/*//A nova sintaxe é essa <Route exact path="/about" element={<About/>}/>  */
const Menu = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/param/:id" element={<Param />} />
            <Route exact path="/" element={<Home />} />
            {/* ("*")Significa que qualquer outra URL que não foram referenciadas cai nessa routa */}
            <Route path="*" element={<NotFound />} /> 
        </Routes>

    </main>
)

export default Menu