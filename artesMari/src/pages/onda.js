import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import onda from '../assets/images/onda.jpg'

const Onda = (props) => (
    <Layout>
        <Helmet>
            <title>Onda</title>
            <meta name="description" content="Landing Page" />
        </Helmet>


        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Onda</h2>
                    </header>
                    <p>esta colecao se chama marinha porque....</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/ondaI" className="image">
                        <img src={onda} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Onda</h3>
                            </header>
                            <p>Pintado em 2017 a oleo. Tela 60 x 90.  Inspirado em Garopaba, SC</p>
                            <ul className="actions">
                                <li><Link to="/ondaI" className="button">Veja Mais</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
               
               
            </section>
        </div>

    </Layout>
)

export default Onda