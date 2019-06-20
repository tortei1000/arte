import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import amanhecer from '../assets/images/amanhecer.jpg'


const AmanhecerNaPraia = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Amanhecer na Praia</h1>
                    </header>
                    <span className="image main"><img src={amanhecer} alt="" /></span>
                    <p>Amanhecer em Garopaba! Ainda estava escuro! E fiz esta foto, para realizar uma pintura cheia de contrastes</p>
                 
                </div>
            </section>
        </div>

    </Layout>
)

export default AmanhecerNaPraia