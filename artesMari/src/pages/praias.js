import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import ferrugem from '../assets/images/ferrugem.jpg'
import marinhaII from '../assets/images/marinhaII.jpg'

const Praias = (props) => (
    <Layout>
        <Helmet>
            <title>Marinha</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

       

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Praias</h2>
                    </header>
                    <p>esta colecao se chama praias porque....</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={ferrugem} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Praia da Ferrugem</h3>
                            </header>
                            <p>Pintado em 2019 a oleo. Tela 55 x 80.  Inspirado em Praia da Ferrugem, SC</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={marinhaII} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Marinha II</h3>
                            </header>
                            <p>2018 tela oleo 50 x 60</p>
                            <ul className="actions">
                                <li><Link to="/marinhaII" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
               
            </section>
        </div>

    </Layout>
)

export default Praias