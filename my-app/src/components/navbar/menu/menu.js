import React from "react"
// import { Link } from 'react-router-dom'
import './menu.css'
import { HashLink as Link } from 'react-router-hash-link';



class Menu extends React.Component {
    constructor(){
        super()
        this.state = { open : false }
    }

    handleOpenOrClose = () => {
        this.setState({ open : !this.state.open })
    }

    render(){
        let classesOfButton = 'menu__button'
        let classesOfOptions = 'menu__options'

        if (this.state.open){
            classesOfButton += ' menu__button--open'
            classesOfOptions += ' menu__options--open'
        }

        return(
            <div>
               <a  className={classesOfButton} onClick={this.handleOpenOrClose}>Menu</a>
               <ul className={classesOfOptions}>
                   <li><Link to='/some/path/#secao-bonekas' onClick={this.handleOpenOrClose}>A Buneka</Link></li>
                   <li><Link to='/some/path#secao-voluntarios' onClick={this.handleOpenOrClose}>Voluntários</Link></li>
                   <li><Link to='/some/path#footer' onClick={this.handleOpenOrClose}>Contato</Link></li>
               </ul>
            </div>
        )
    }
}

export default Menu