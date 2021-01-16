import React, { Component } from 'react'
import './Die.css'

class Die extends Component {

    render() {
        const props = this.props
        const { face, rolling } = props
        
        return (
            <div className="Die">
                <i className={`fas fa-dice-${face} ${rolling ? "Die-rolling":""}`}></i>
            </div>
        )
    }
}

export default Die