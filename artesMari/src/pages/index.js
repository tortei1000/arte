import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import marinha from '../assets/images/marinha.jpg'
import ferrugem from '../assets/images/ferrugem.jpg'
import amanhecer from '../assets/images/amanhecer.jpg'
import barcos from '../assets/images/barcos.jpg'
import pedraII from '../assets/images/enseada.jpg'
import onda from '../assets/images/onda.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${marinha})`}}>
                            <header className="major">
                                <h3>Marinha</h3>
                                <p>2018-2019</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${ferrugem})`}}>
                            <header className="major">
                                <h3>Praias</h3>
                                <p>2018-2019</p>
                            </header>
                            <Link to="/praias" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${amanhecer})`}}>
                            <header className="major">
                                <h3>Amanhecer/Anoitecer</h3>
                                <p>2018</p>
                            </header>
                            <Link to="/amanhecer" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${barcos})`}}>
                            <header className="major">
                                <h3>Barcos</h3>
                                <p>2017-2019</p>
                            </header>
                            <Link to="/barcos" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pedraII})`}}>
                            <header className="major">
                                <h3>Pedras</h3>
                                <p>2017-2018</p>
                            </header>
                            <Link to="/pedras" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${onda})`}}>
                            <header className="major">
                                <h3>Onda</h3>
                                <p>2017</p>
                            </header>
                            <Link to="/onda" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex