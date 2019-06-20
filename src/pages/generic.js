import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import marinha from '../assets/images/marinha.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Marinha I</h1>
                    </header>
                    <span className="image main"><img src={marinha} alt="" /></span>
                    <p>Está pintura foi baseada em duas fotos sobrepostas, transformando assim em uma nova composição</p>
                 
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic