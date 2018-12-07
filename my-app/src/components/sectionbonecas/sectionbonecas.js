import React from 'react'
import Box from './boxdescricao'
import './sectionbonecas.css'
import bonequinha from '../../img/boneka.png'
import cabelo from '../../img/cabelo.png'
import expressao from '../../img/expressao.png'
import tecido from '../../img/tecido.png'
import vestidocalcinha from '../../img/vestido-calcinha.png'
import sapato from '../../img/sapato.png'
import turbante from '../../img/turbante.png'
import Cta from '../cta'


class Boneca extends React.Component {
    state ={
        parteSelecionada: null,
    }
    
    hoverOn = (descricao) => {
        this.setState({
            parteSelecionada: descricao,
        });
    }

    handleLeave = () => {
        this.setState({ parteSelecionada: null })
    }

    render() {
        const {parteSelecionada}=this.state;
        return (
            <section className='section-bonecas'>
            <div className="box-intro">
                <p className="section-description">O <strong>Projeto Bunekas</strong>, idealizado pela psicóloga <strong>Michelli Bordinhon Dezani</strong> no início de 2017, confecciona bonecas, vestidos e acessórios para crianças africanas por meio do trabalho voluntário de mulheres de diversas cidades do Brasil.</p>
            </div>

               <div className="bonecas_box" id="secao-bonekas">
               <h2 className="section-title"> A Buneka</h2>
                <div className="infografico-boneka">
                <img src={bonequinha} alt="exemplo da boneca de pano" className="mobile-flex" />

                    <div className="box-esquerdo coluna">
                        <Box className="box-text texto1 alinha-direita" titulo="Cabelo de Feltro" descricao="O mais parecido com o cabelo das meninas" onMouseLeave={this.handleLeave} onMouseEnter={() => this.hoverOn('cabelo')}> </Box>
                        <Box className="box-text texto2 alinha-direita" onMouseLeave={this.handleLeave} onMouseEnter={() => this.hoverOn('tecido')} titulo="Tecido e espuma" descricao="Essência de Bergamota repelente e usada no combate à depressão infantil"> </Box>
                        <Box className="box-text texto3 alinha-direita" onMouseLeave={this.handleLeave} onMouseEnter={() => this.hoverOn('vestido')} titulo="Vestido" descricao="Feito com tecido colorido"> </Box>
                        <Box className="box-text texto4 alinha-direita" onMouseLeave={this.handleLeave} onMouseEnter={() => this.hoverOn('turbante')} titulo="Turbante" descricao="Acessório que estimula a valorização do cabelo"> </Box>
                    </div>
                    <div className="coluna bonecas">
                    <img src={cabelo} alt="cabelo destaque" className={`boneca-cabelo coluna ${parteSelecionada !== 'cabelo' ? 'boneca--hidden' : ''}`} />
                    <img src={expressao} alt="expressao destaque" className={`boneca-expressao coluna ${parteSelecionada !== 'expressao' ? 'boneca--hidden' : ''}`} />
                    <img src={tecido} alt="destaque tecido" className={`boneca-tecido coluna ${parteSelecionada !== 'tecido' ? 'boneca--hidden' : ''}`} />
                    <img src={vestidocalcinha} alt="destaque vestido" className={`boneca-vestido coluna ${parteSelecionada !== 'vestido' ? 'boneca--hidden' : ''}`} />
                    <img src={sapato} alt="destaque sapato" className={`boneca-sapato coluna ${parteSelecionada !== 'sapato' ? 'boneca--hidden' : ''}`} />
                    <img src={vestidocalcinha} alt="destaque calcinha" className={`boneca-calcinha coluna ${parteSelecionada !== 'calcinha' ? 'boneca--hidden' : ''}`} />
                    <img src={turbante} alt="destaque turbante" className={`boneca-turbante coluna ${parteSelecionada !== 'turbante' ? 'boneca--hidden' : ''}`} />
                    <img src={bonequinha} alt="exemplo da boneca de pano" className="boneca-principal coluna" />
                    </div>
                  
                    <div className="box-direito coluna">
                        <Box className="box-text texto5 alinha-esquerda" onMouseLeave={this.handleLeave} onMouseEnter={() => this.hoverOn('expressao')} titulo="Expressão" descricao="Para que a criança projete na boneca o que está sentindo"> </Box>
                        <Box className="box-text texto6 alinha-esquerda" onMouseLeave={this.handleLeave} onMouseEnter={() => this.hoverOn('calcinha')} titulo="Calcinha" descricao="Estimula o uso e o valor do seu corpo que não deve ser tocado, abusado ou explorado"> </Box>
                        <Box className="box-text texto7 alinha-esquerda" onMouseLeave={this.handleLeave} onMouseEnter={() => this.hoverOn('sapato')} titulo="Sapatinho" descricao="Estimula as crianças a usarem, quando possível"> </Box>
                    </div>
                </div>
                <Cta />
               </div>
            </section>
        );
    }
}

export default Boneca














