import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pedra from '../assets/images/pedrafurada.jpg'
import pedraII from '../assets/images/enseada.jpg'

const Pedras = (props) => (
    <Layout>
        <Helmet>
            <title>Pedras</title>
            <meta name="description" content="Landing Page" />
        </Helmet>


        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Pedras</h2>
                    </header>
                    <p>esta colecao se chama marinha porque....</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/pedraI" className="image">
                        <img src={pedra} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Pedra Furada</h3>
                            </header>
                            <p>Pintado em 2018 a oleo. Tela 60 x 90.  Inspirado em Garopaba, SC</p>
                            <ul className="actions">
                                <li><Link to="/pedraI" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/pedraII" className="image">
                        <img src={pedraII} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Enseada</h3>
                            </header>
                            <p>2017 tela oleo 60 x 80</p>
                            <ul className="actions">
                                <li><Link to="/pedraII" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
               
            </section>
        </div>

    </Layout>
)

export default Pedras