import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo from '../../img/branco-logo.png'
import facebook from '../../img/face-icon.png'
import instagram from '../../img/insta-icon.png'
import email from '../../img/mail-icon.png'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer__box" id="footer">
                <div>
                    <img src={logo} alt="logo projeto bunekas" className="footer__logo" />
                </div>
                <div className="footer__right-elements">
                    <h5 className="title_form">Insira seu contato abaixo para entrarmos em contato com você.</h5>
                    <form className="form__box">
                        <input type="text" name="Nome" value="Seu nome" className="form__input" />
                        <input type="text" name="Email" value="Seu e-mail" className="form__input" />
                        <input type="submit" value="Enviar" className="form__btn-submit" />
                    </form>
                </div>
                <div className="icon__list">
                        <Link to='https://www.facebook.com/projetobunekas/'><img className="icon__item" src={facebook} /></Link>
                        <Link to='https://www.instagram.com/projetobunekas/'><img className="icon__item" src={instagram} /></Link>
                        <Link to='mailto:projetobunekas@yahoo.com'><img className="icon__item" src={email} /></Link>
                    </div>
            </div>
        );
    }
}

export default Footer