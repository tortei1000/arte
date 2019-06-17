import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import marinha from '../assets/images/marinha.jpg'

const Landing = (props) => (
  <Layout>
    <Helmet>
      <title>Marinha</title>
      <meta name="description" content="Marinha page" />
    </Helmet>

    

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Marinha</h2>
          </header>
          <p>Descricao da tela Marinha.... detalhes.... estilo...</p>
          <img src={marinha} alt="" />
        </div>
      </section>


    

    </div>

  </Layout>
)

export default marinha