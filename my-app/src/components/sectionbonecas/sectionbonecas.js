import React from 'react'
import Box from './boxdescricao'
import './sectionbonecas.css'
import bonequinha from '../../img/boneka.png'


class Boneca extends React.Component {
    render() {
        return (
            <section className='section-bonecas'>
            <div className="box-intro">
                <p className="section-description">O <strong>Projeto Bunekas</strong>, idealizado pela psicóloga <strong>Michelli Bordinhon Dezani</strong> no início de 2017, confecciona bonecas, vestidos e acessórios para crianças africanas por meio do trabalho voluntário de mulheres de diversas cidades do Brasil.</p>
            </div>

                <h2 className="section-title"> A Buneka</h2>
                <div className="infografico-boneka">
                    <div className="box-esquerdo coluna">
                        <Box className="box-text texto1 alinha-direita" titulo="Cabelo de Feltro" descricao="O mais parecido com o cabelo das meninas" > </Box>
                        <Box className="box-text texto2 alinha-direita" titulo="Tecido e espuma" descricao="Essência de Bergamota repelente e usada no combate à depressão infantil"> </Box>
                        <Box className="box-text texto3 alinha-direita" titulo="Vestido" descricao="Feito com tecido colorido"> </Box>
                        <Box className="box-text texto4 alinha-direita" titulo="Turbante" descricao="Acessório que estimula a valorização do cabelo"> </Box>
                    </div>
                    <img src={bonequinha} alt="exemplo da boneca de pano" className="boneca-principal coluna" />
                    <div className="box-direito coluna">
                        <Box className="box-text texto5 alinha-esquerda" titulo="Expressão" descricao="Para que a criança projete na boneca o que está sentindo"> </Box>
                        <Box className="box-text texto6 alinha-esquerda" titulo="Calcinha" descricao="Estimula o uso e o valor do seu corpo que não deve ser tocado, abusado ou explorado"> </Box>
                        <Box className="box-text texto7 alinha-esquerda" titulo="Sapatinho" descricao="Estimula as crianças a usarem, quando possível"> </Box>
                    </div>
                </div>
            </section>
        );
    }
}

export default Boneca














