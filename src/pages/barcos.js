import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import barcos from '../assets/images/barcos.jpg'
import barcoII from '../assets/images/barcoatracado.jpg'


const Barcos = (props) => (
    <Layout>
        <Helmet>
            <title>Barcos</title>
            <meta name="description" content="Landing Page" />
        </Helmet>


        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Barcos</h2>
                    </header>
                    <p>esta colecao se chama ... porque....</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/barcoI" className="image">
                        <img src={barcos} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Barcos</h3>
                            </header>
                            <p>Pintado em 2019 a oleo. Tela 50 x 80.  Inspirado em Garopaba, SC</p>
                            <ul className="actions">
                                <li><Link to="/barcoI" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/barcoII" className="image">
                        <img src={barcoII} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Barco Atracado</h3>
                            </header>
                            <p>2017 tela oleo 60 x 90</p>
                            <ul className="actions">
                                <li><Link to="/barcoII" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
              
               
            </section>
        </div>

    </Layout>
)

export default Barcos