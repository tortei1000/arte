import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import garopaba from '../assets/images/garopaba.jpg'


const Garopaba = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Garopaba</h1>
                    </header>
                    <span className="image main"><img src={garopaba} alt="" /></span>
                    <p>Composição baseada em foto da praia de Garopaba.</p>
                 
                </div>
            </section>
        </div>

    </Layout>
)

export default Garopaba