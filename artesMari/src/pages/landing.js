import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import marinha from '../assets/images/marinha.jpg'
import marinhaII from '../assets/images/marinhaII.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Marinha</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        {/* <BannerLanding /> */}

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Marinha</h2>
                    </header>
                    <p>esta colecao se chama marinha porque....</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={marinha} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Marinha</h3>
                            </header>
                            <p>Pintado em 2018 a oleo. Tela 70 x 90.  Inspirado em Garopaba, SC</p>
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

export default Landing