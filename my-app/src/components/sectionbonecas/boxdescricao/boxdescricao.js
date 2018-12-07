import React from 'react'
import './boxdescricao.css'


class Box extends React.Component {
    render() {
        return (
            <div className={this.props.className} {...this.props}>
                <h4 className="titulo-box">{this.props.titulo}</h4>
                <p className="descricao-box">{this.props.descricao}</p>
            </div>
        );
    }
}

export default Box
