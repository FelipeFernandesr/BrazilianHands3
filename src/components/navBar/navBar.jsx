// // import React from 'react'  
// import './index.scss'

// const hamburguer = document.querySelector(".hamburguer");
// const nav = document.querySelector(".nav");

// hamburguer.addEventListener("click", () => {
//   nav.classList.toggle("active");
// });

// const NavBar = () => {
//   return (
   
//         <div>
//             <header>
//                 <nav className="nav">
//                     <a href="" className="logo">
//                         <img src="../../../public/logoR.svg" alt=""/>
//                         <h1>Brazilian Hands <br/>
//                             Cooperative
//                         </h1>
//                     </a>
//                     <button className="hamburguer"></button>
//                     <ul className="nav-list">
//                         <li>
//                             <a href="#">Home</a>
//                         </li>
//                         <li>
//                             <a href="#">Sobre nós</a>
//                         </li>
//                         <li>
//                             <a href="#">Missão e valores</a>
//                         </li>
//                         <li>
//                             <a href="#">Serviços</a>
//                         </li>
//                         <li>
//                             <a href="#">Contate nos</a>
//                         </li>
//                         <li>
//                             <a href="#">Trabalhe conosco</a>
//                         </li>
//                         <li>
//                             <a href="#">Privacidade</a>
//                         </li>
//                     </ul>

//                 </nav>
//             </header>
//             <main className="image-de-fundo"></main>
//         </div>
//   )
// }

// export default NavBar

import { useState } from 'react'; // Apenas importe o useState se estiver usando
import './index.scss';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburguerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <header>
        <nav className={`nav ${isActive ? 'active' : ''}`}>
          <a href="#" className="logo">
            <img src="/logoR.svg" alt="Logo" />
            <h1>Brazilian Hands <br /> Cooperative</h1>
          </a>
          <button className="hamburguer" onClick={handleHamburguerClick}></button>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Missão e valores</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contate nos</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Privacidade</a></li>
          </ul>
        </nav>
      </header>
      <main className="image-de-fundo"></main>
    </div>
  );
};

export default NavBar;
