import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import amanhecer from '../assets/images/amanhecer.jpg'
import anoitecer from '../assets/images/anoitecernapraia.jpg'


const Amanhecer = (props) => (
    <Layout>
        <Helmet>
            <title>Amanhecer/Anoitecer</title>
            <meta name="description" content="Landing Page" />
        </Helmet>


        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Amanhecer/Anoitecer</h2>
                    </header>
                    <p>esta colecao se chama ... porque....</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/amanhecernapraia" className="image">
                        <img src={amanhecer} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Amanhecer</h3>
                            </header>
                            <p>Pintado em 2018 a oleo. Tela 70 x 90.  Inspirado em Garopaba, SC</p>
                            <ul className="actions">
                                <li><Link to="/amanhecernapraia" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/anoitcer" className="image">
                        <img src={anoitecer} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Anoitecer na Praia</h3>
                            </header>
                            <p>2018 tela oleo 1,00 x 80</p>
                            <ul className="actions">
                                <li><Link to="/anoitecer" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
               
            </section>
        </div>

    </Layout>
)

export default Amanhecer