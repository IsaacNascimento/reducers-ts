import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props: any) => {
  const songs = props.songs;
  return (
    <>
      <h1>SongList</h1>
      <br/>
      <ul className='ui divided list'>
        {songs.map((item: any, index: string) => (
          <div key={index}>
            <div   className="item">
              <div className="right floated content">
                <button
                  className="ui button primary"
                  onClick={() => props.selectSong(item)}
                >Select</button>
              </div>
              <div className="content" key={index}>
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return { songs: state.songs };
};

const SongsList = connect(
  mapStateToProps,
  { selectSong }
)(SongList);

export { SongsList };
