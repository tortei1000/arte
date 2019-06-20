import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import lencois from '../assets/images/lencois.jpg'


const Lencois = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Lencois Maranhenses</h1>
                    </header>
                    <span className="image main"><img src={lencois} alt="" /></span>
                    <p>Suavidade nos tons, para fazer contraste com a água .</p>
                 
                </div>
            </section>
        </div>

    </Layout>
)

export default Lencois