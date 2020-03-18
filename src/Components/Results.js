import React from 'react'
import './Results.css'
import Tracklist from './Songlist'

class Results extends React.Component {
    render() {
        return(
            <div className= "Results">
                <h4>Search Results</h4> 
                <Tracklist tracks = {this.props.results} onAdd = {this.props.onAdd} />
            </div>
        )
    }
}

export default Results