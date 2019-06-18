import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Marinha</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/praias">Praias</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/barcos">Barcos</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/onda">Onda</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/pedras">Pedras</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/amanhecer">Amanhecer/Anoitecer</Link></li>
            </ul>
            
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
