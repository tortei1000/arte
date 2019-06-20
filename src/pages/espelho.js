import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import espelho from '../assets/images/praiadoespelho.jpg'


const Espelho = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Praia do Espelho</h1>
                    </header>
                    <span className="image main"><img src={espelho} alt="" /></span>
                    <p>Essa composição foi feita com 4 fotos ,no intuito de revelar a calma do mar e o tom dramático do céu.</p>
                 
                </div>
            </section>
        </div>

    </Layout>
)

export default Espelho