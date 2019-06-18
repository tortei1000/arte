import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import onda from '../assets/images/onda.jpg'


const OndaI = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Onda</h1>
                    </header>
                    <span className="image main"><img src={onda} alt="" /></span>
                    <p>paragrafo descrevendo este quadro</p>
                 
                </div>
            </section>
        </div>

    </Layout>
)

export default OndaI