import React from 'react';
import { connect } from 'react-redux';

const SongsDetail = (props : any) => {
  const song = props.song;
  if (!song) {
    return <h1>No such song selected</h1>
  }
  return (
    <div>
        <h2>Details for:</h2>
        <p>Song Title: {song?.title}</p>
        <p>Duration: {song?.duration}</p>
    </div>
  ); 
};

const mapStateToProps = (state: any) => {
  return { song: state.selectedSong };
};

const SongDetail = connect(mapStateToProps)(SongsDetail);

export { SongDetail };
