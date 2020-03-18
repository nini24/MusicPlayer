import React from 'react'
import './Playlist.css'

import Songlist from './Songlist'

class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.nameChange = this.nameChange.bind(this)
    }
    nameChange = e => {
        this.props.onNameChange(e.target.value)
    }
    render() {
        return (
            <div className = "Playlist">
                <h4>Add a playlist</h4>
                <input onChange = {this.nameChange} defaultValue ={'Type the playlist name'}/>
                <Songlist tracks = {this.props.playlistTracks} isRemoval ={true} onRemove ={this.props.onRemove}/>
                <button className = "savePlaylist" onClick= {this.props.onSave}>SAVE ON SPOTIFY</button>
            </div>
        )
    }
}
export default Playlist