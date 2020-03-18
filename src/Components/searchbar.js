import React from 'react'
import './searchbar.css'

class Searches extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            item:''
        }
        this.itemChange = this.itemChange.bind(this);
        this.search = this.search.bind(this)
        this.handleEnter = this.handleEnter.bind(this);
    }

    itemChange = e => {
        this.setState({item:e.target.value})
    }
    search = () => {
        this.props.onSearch(this.state.item)
    }

    handleEnter = e => {
        if(e.keyCode === 13) {
            this.search()
        }
    }
    render() {
        return(
            <div className = "searchBar">
                <input className ="in" placeholder = "Enter a song, album or artist"
                onChange={this.itemChange}
                onKeyUp={this.handleEnter} />
                <button className="searchButton" onClick={this.search}>Go</button>
            </div>
        )
    }
}
export default Searches