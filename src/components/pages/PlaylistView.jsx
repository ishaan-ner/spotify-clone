import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import allPlaylists from "../../services/fakePlaylists";

const PlaylistView = () => {
  const { id } = useParams();
  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  // const getPlaylist = async () => {
  //   debugger;
  //   let tracks = [];
  //   try {
  //     // tracks = await axios.get({
  //     //   url: `localhost:4000/playlistserver/${id}`,
  //     // });

  //   } catch (error) {
  //     console.log("Error:", error);
  //   } finally {
  //     // this will run irrespective of success or failure
  //   }
  //   return tracks;
  // };
  // let tracks = getPlaylist();

  // const filterTracks = (playListId, tracks) => {
  //   console.log(tracks);
  //   // const filteredTracks = tracks.filter((item) => {
  //   //   return item.playlistID === playListId;
  //   // });
  //   // return filteredTracks;
  // };

  // filterTracks(id, tracks);
  let tracks = [
    {
      id: "1",
      artist: "Artist1",
      song: "Song1",
      length: "4.20",
      playlistID: "9",
    },
    {
      id: "2",
      artist: "Artist2",
      song: "Song2",
      length: "4.20",
      playlistID: "9",
    },
    {
      id: "3",
      artist: "Artist3",
      song: "Song3",
      length: "4.20",
      playlistID: "9",
    },
    { id: "4", artist: "Artist4", song: "Song4", length: "4.20" },
    { id: "5", artist: "Artist5", song: "Song5", length: "4.20" },
    { id: "6", artist: "Artist6", song: "Song6", length: "4.20" },
    { id: "7", artist: "Artist7", song: "Song7", length: "4.20" },
    { id: "8", artist: "Artist8", song: "Song8", length: "4.20" },
    { id: "9", artist: "Artist9", song: "Song9", length: "4.20" },
    { id: "10", artist: "Artist10", song: "Song10", length: "4.20" },
    { id: "11", artist: "Artist11", song: "Song11", length: "4.20" },
  ];
  return (
    <div className="main-window playlist-view">
      <div style={{ backgroundColor: "rgb(37, 37, 39)" }}>
        <div className="playlist-banner">
          <img src={playlist.img} alt="" />
          <div className="playlist-banner-txt">
            <p>PLAYLIST</p>
            <h1>{playlist.playlist}</h1>
            <h2>{playlist.description}</h2>
            <p>Spotify</p>
          </div>
        </div>
      </div>

      <div className="playlist-controls">
        <button>
          <svg height="28" role="img" width="28" viewBox="0 0 24 24">
            <polygon
              points="21.57 12 5.98 3 5.98 21 21.57 12"
              fill="currentColor"
            ></polygon>
          </svg>
        </button>

        <i class="fas fa-heart"></i>
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div className="playlist-list">
        <ul>
          {tracks.map((track) => (
            <li key={track.id} className="playlist-track">
              <i class="fas fa-music"></i>
              <i class="fas fa-play"></i>
              <div className="playlist-track-song">
                <h3>{track.song}</h3>
                <p>{track.artist}</p>
              </div>
              <span>{track.length}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlaylistView;
