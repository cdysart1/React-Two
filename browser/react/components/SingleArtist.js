import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Songs from './Songs';
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {
  constructor() {
    super()
    this.state = {
      artist: {},
      artistAlbums: [],
      artistSongs: []
    };

  }
  componentDidMount() {
    const artistId = this.props.match.params.artistId;

    var artId =  axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => this.setState({
        artist: artist
      }));

    var artalbum = axios.get(`/api/artists/${artistId}/albums`)
      .then(res => res.data)
      .then(albums => this.setState({
        artistAlbums: albums
      }));

    var artsongs =  axios.get(`/api/artists/${artistId}/songs`)
      .then(res => res.data)
      .then(songs => this.setState({
        artistSongs: songs
      }));


    Promise.all([artId, artalbum, artsongs])
    .then(function(){
      console.log('resolved');
    })
  }

  render() {
    const artist = this.state.artist;

    // console.log(artist);
    // console.log('aaa', artistAlbums);
    return (
      <div>
        <h3>{artist.name}</h3>
      <AllAlbums albums={this.state.artistAlbums} />
      <Songs songs={this.state.artistSongs} />
      </div>
    );
  }
}
