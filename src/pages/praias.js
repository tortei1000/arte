import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import ferrugem from '../assets/images/ferrugem.jpg'
import garopaba from '../assets/images/garopaba.jpg'
import lencois from '../assets/images/lencois.jpg'
import espelho from '../assets/images/praiadoespelho.jpg'

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
                    <Link to="/ferrugem" className="image">
                        <img src={ferrugem} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Praia da Ferrugem</h3>
                            </header>
                            <p>Pintado em 2019 a oleo. Tela 55 x 80.  Inspirado em Praia da Ferrugem, SC</p>
                            <ul className="actions">
                                <li><Link to="/ferrugem" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/garopaba" className="image">
                        <img src={garopaba} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Garopaba</h3>
                            </header>
                            <p>2018 tela oleo 70 x 90</p>
                            <ul className="actions">
                                <li><Link to="/garopaba" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/lencois" className="image">
                        <img src={lencois} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Lencois Maranhenses</h3>
                            </header>
                            <p>2019 tela oleo 70 x 1,50</p>
                            <ul className="actions">
                                <li><Link to="/lencois" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/espelho" className="image">
                        <img src={espelho} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Praia do Espelho</h3>
                            </header>
                            <p>2018 tela oleo 60 x 1,00</p>
                            <ul className="actions">
                                <li><Link to="/espelho" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
               
            </section>
        </div>

    </Layout>
)

export default Praias