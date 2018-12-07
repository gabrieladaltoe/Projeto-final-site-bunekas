import React from 'react'
import './sectionvoluntarios.css'
import Mapa from '../../img/mapa-brasil.png'
import Voluntarios1 from '../../img/vol1.jpg'
import Voluntarios2 from '../../img/vol2.jpg'
import Voluntarios3 from '../../img/vol3.jpg'
import Voluntarios4 from '../../img/vol4.jpg'





class Voluntarios extends React.Component {
    render() {
        return (
            <section className="section-voluntario__gray" id="secao-voluntarios">
                <h2 className="section-voluntarios__title">Voluntários</h2>
                <p className='section-voluntarios__text'>
                    Desde o início do Projeto são organizadas oficinas em todo o país para voluntárias. Atualmente há grupos de bunekeiras em:
                        </p>
                    <div className='section-voluntarios__box'>

                        <div className='section-voluntarios__box-img'>
                            <img src={Voluntarios1} alt="voluntarios costurando" className="foto-voluntarios1 img-voluntarios" />
                            <img src={Voluntarios2} alt="voluntarios costurando" className="foto-voluntarios2 img-voluntarios" />
                            <img src={Voluntarios3} alt="voluntarios costurando" className="foto-voluntarios3 img-voluntarios" />
                            <img src={Voluntarios4} alt="voluntarios costurando" className="foto-voluntarios4 img-voluntarios" />
                        </div>
                        <ul className='section-voluntarios__list'>
                            <li className='section-voluntarios__itens'>São Paulo, Sorocaba, Americana, Piracicaba, Atibaia, Jundiaí, Itu e Ourinhos (SP)</li>
                            <li className='section-voluntarios__itens'>Natal (RN)</li>
                            <li className='section-voluntarios__itens'>Juiz de Fora e Cataguases (MG)</li>
                            <li className='section-voluntarios__itens'>Anápolis (GO)</li>
                            <li className='section-voluntarios__itens'>Muqui (ES)</li>
                            <li className='section-voluntarios__itens'>Três Lagoas (MT)</li>
                            <li className='section-voluntarios__itens'>Rio de Janeiro e Nova Friburgo (RJ)</li>
                        </ul>
                        <div className="mapa-area">
                            <img src={Mapa} alt="mapa do Brasil" className="mapa-img" />
                        </div>
                    </div>

            </section>
        );
    }
}

export default Voluntarios
