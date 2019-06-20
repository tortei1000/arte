import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pedra from '../assets/images/pedrafurada.jpg'


const PedraI = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Pedra Furada</h1>
                    </header>
                    <span className="image main"><img src={pedra} alt="" /></span>
                    <p>Realizei a colagem de 4 fotos para esta pintura, que  tornou-se surreal.</p>
                 
                </div>
            </section>
        </div>

    </Layout>
)

export default PedraI