import React from 'react'
import './index.scss'
import NavBar from '../../components/navBar/navBar.jsx'


function Home() {
  return (
    <section>
      <NavBar />
      <div className='container'>
        <div className='container_Itens'>
          <section className='container_Itens_Section1'>
            <div className='container_Itens_Section1_Content'>
              <div className='container_Itens_Section1_Content_1'>
                <img src="star.svg" alt="avaliation" />
                <h2>
                  Exceptional Services for Your Home
                </h2>
              </div>
              <div className='container_Itens_Section1_Content_2'>
                <h1>
                  Reliable, High-Quality
                  Services for You
                </h1>
                <p>
                  Talented Brazilians Making Your
                  Home Beautiful and Life Easier
                  with Various Services
                </p>
              </div>

              <button>Get Started</button>
            </div>
          </section>
          <section className='container_Itens_Section2'>
            <div className='container_Itens_Section2_display'>
              <div className='container_Itens_Section2_display_Content'>
                <div className='container_Itens_Section2_display_Content_text'>
                  <h3>
                    Quality Services Co-operative
                  </h3>
                  <p>
                    Talented Brazilians offering reliable and high-
                    quality services to make your life easier.
                  </p>
                </div>
                <div className='container_Itens_Section2_display_Content_text'>
                  <h3>
                    Professional Residential Cleaning Service
                  </h3>
                  <p>
                    Our cleaning experts leave your home sparkling
                    with weekly or deep cleaning services.
                  </p>
                </div>
                <div className='container_Itens_Section2_display_Content_text'>
                  <h3>
                    Impeccable Garden Care Service
                  </h3>
                  <p>
                    Our landscapers take care of plants, trees, and
                    keep your garden green and lush.
                  </p>
                </div>
                <div className='container_Itens_Section2_display_Content_text'>
                  <h3>
                    Transform Your Space with Painting
                  </h3>
                  <p>
                    Skilled painters creating cosy environments with
                    a new colour for your space.
                  </p>
                </div>
                <button>Come and discover our services.</button>
              </div>
              <div className='container_Itens_Section2_display'>
                <img src="section2image.svg" alt="img" />
              </div>
            </div>

          </section>
          <section className='container_Itens_Section3'>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <button></button>
            </div>
          </section>
        </div>

      </div>

    </section>
  )
}

export default Home