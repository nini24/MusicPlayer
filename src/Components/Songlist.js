import React from 'react'
import './Songlist.css'

import Track from './Songs'

class Tracklist extends React.Component{
    render() {
        return(
            <div className="songList">
                {this.props.tracks.map(track => {
                    return(
                        <Track track ={track} key ={track.id} onAdd = {this.props.onAdd} isRemoval = {this.props.isRemoval} onRemove = {this.props.onRemove}/>
                    )
                })}
            </div>
        )
    }
}
export default Tracklist
