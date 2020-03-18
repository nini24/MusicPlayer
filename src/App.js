import React from 'react';
import SearchBar from './Components/searchbar'
import Results from './Components/Results'
import Playlist from './Components/Playlist'
import Spotify from './Spotify'

import './App.css';

class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults:[],
      playlistName:"New Playlist",
      playlistTracks:[]
    }
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this)
    this.updatePlaylist =this.updatePlaylist.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.doThese = this.doThese.bind(this)
  }
  search(item) {
    Spotify.search(item).then(searchResults => {
      this.setState({searchResults:searchResults})
    })
  }
addTrack = track => {
    let tracks = this.state.playlistTracks
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({playlistTracks:tracks})
  }
  removeTrack = track => {
    let tracks = this.state.playlistTracks;
    let trackSearch = this.state.searchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    trackSearch.unshift(track)
    this.setState({playlistTracks:tracks})

  }
  removeTrackSearch = track => {
    let tracks = this.state.searchResults
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({searchResults:tracks})
  }
  doThese = track => {
    this.addTrack(track)
    this.removeTrackSearch(track)
  }
  updatePlaylist = name => {
    this.setState({playlistName:name})
  }
  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName,trackUris).then(() => {
      this.setState({playlistName:"New Playlist",playlistTracks:[]})
    })
  }

  render() {
    return(
      <div>
        <div className = "header">
        <h1>
          <a href ="http://localhost:3000">Ninify</a></h1>
        </div>
       
         <div className = "App" >
           <SearchBar onSearch = {this.search}/>
           <div className ="playlist">
             <Results results = {this.state.searchResults} onAdd = {this.doThese}/>
             <Playlist playlistTracks = {this.state.playlistTracks} onNameChange = {this.updatePlaylist} onRemove = {this.removeTrack} onSave ={this.savePlaylist}/>

           </div>

         </div>
      </div>
     
    )
  }
}


export default App;
