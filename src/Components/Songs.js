import React from 'react'
import './Songs.css'

class Tracks extends React.Component {
    constructor(props) {
        super(props)

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this)
    }
    addTrack(event) {
        this.props.onAdd(this.props.track)
    }

    removeTrack(event) {
        this.props.onRemove(this.props.track)
    }
    renderAction() {
        if(this.props.isRemoval) {
            return (
                <button className = "action" onClick ={this.removeTrack}>-</button>
            )
        }
        return (
            <button className="action" onClick = {this.addTrack}>+</button>
        )
        }
        render() {
            return(
                <div className="song">
                    <div className="song-info">
                        <h4>{this.props.track.name}</h4>
                        <p>{this.props.track.artist}|{this.props.track.album}</p>
                        
                        <iframe src = {"https://open.spotify.com/embed/track/"+this.props.track.id}
                        width ="400" height ="80" frameBorder="0" allowTransparency="true" allow = "encrypted-media" title ="preview" />
                 
                        

                    </div>
                    {this.renderAction()}
                </div>
            )
        }
}
export default Tracks