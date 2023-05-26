import React from 'react'
import '../assets/css/home.css'
import fruit1 from '../assets/img/fruit1.jpg'
import f2 from '../assets/img/fruit2.jpg'
import f3 from '../assets/img/fruit3.jpg'
import f4 from '../assets/img/fruit4.jpg'

const Home = () => {
  return (
    <section id="home" className="section-home container">
      <article className='text-lg-left-home'>
        <aside className='text-center-home text-lg-left-home'>
          <h3 className="home-subtitle">Descubre el sabor único de J & M</h3>
          <h1 className="home-title">
            Nuestra App InnovaSoft </h1>
        </aside>
        <p className="description">En J & M nos enorgullece ofrecerte una amplia variedad de productos frescos y de calidad para satisfacer todas tus necesidades. </p>
        <div className="content-btn-home">
          <a className='btn-home'>
            Descargar App
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </article>
      <article>
        <swiper-container class="swiper-home" pagination="true" effect="cube" grab-cursor="true" cube-effect-shadow="true"
          cube-effect-slide-shadows="true" cube-effect-shadow-offset="20" cube-effect-shadow-scale="0.94">
          <swiper-slide class='swiper-home-card'>
            <img className='img-home' src={fruit1} />
            <aside className="card-info-home">
              <div className='card-text-home'>
                <h3>50+ Frutas </h3>
                <p>
                  Seleccionadas por los mejores huertos
                </p>
              </div>
            </aside>
          </swiper-slide>
          <swiper-slide class='swiper-home-card'>
            <img className='img-home' src={f2} />
            <aside className="card-info-home">
              <div className='card-text-home'>
                <h3>50+ Licores </h3>
                <p>
                  Calidad garantizada
                </p>
              </div>
            </aside>
          </swiper-slide>
          <swiper-slide class='swiper-home-card'>
            <img className='img-home' src={f3} />
            <aside className="card-info-home">
              <div className='card-text-home'>
                <h3>50K+ Lorem </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </aside>
          </swiper-slide>
          <swiper-slide class='swiper-home-card'>
            <img className='img-home' src={f4} />
            <aside className="card-info-home">
              <div className='card-text-home'>
                <h3>50K+ Lorem </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </aside>
          </swiper-slide>
        </swiper-container>
      </article>
    </section>
  )
}

export default Home