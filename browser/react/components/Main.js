import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  // why not exact in single album
  //link component page - where are we using <a> : The //Link component itself is a thin wrapper around the //<a> element

  render() {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Route exact path="/" component={StatefulAlbums} />
            <Route exact path="/albums" component={StatefulAlbums} />
            <Route path="/albums/:albumId" component={SingleAlbum} />
            <Route exact path="/artists" component={AllArtists} />
            <Route path="/artists/:artistId" component={SingleArtist} />
          </div>
          <Player />
        </div>
      </HashRouter>

    );
  }
}
