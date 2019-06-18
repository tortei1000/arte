import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import marinhaIII from '../assets/images/marinhaIII.jpg'


const MarinhaIII = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Marinha III</h1>
                    </header>
                    <span className="image main"><img src={marinhaIII} alt="" /></span>
                    <p>paragrafo descrevendo este quadro</p>
                 
                </div>
            </section>
        </div>

    </Layout>
)

export default MarinhaIII