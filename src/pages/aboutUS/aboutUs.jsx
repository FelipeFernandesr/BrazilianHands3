// import React from 'react'
// import './index.scss'

// const AboutUs = () => {
//   return (
//     <div>aboutUs</div>
//   )
// }

// export default AboutUs

// import React from 'react'

// import './index.scss'
// import AboutUs from '../aboutUS/aboutUs.jsx'

// function SobreNos() {
//   return (
//     <div>
//       <AboutUs />
//       <h1>Sobre-nós</h1>
//     </div>
//   )
// }

// export default SobreNos

// import React from 'react'

import './index.scss'
import NavBar from '../../components/navBar/navBar.jsx'

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1 className='image-de-fundo'>
          Sobre Nós
        </h1>

      </div>
    </div>
  )
}

export default AboutUs