import React from 'react';
import AudioPlayer from 'react-playlist-player';

// {
//   currentPlayList: {
//     playlistCoverUrl: 'path/to/coverUrl',
//     playlistName: 'playlist name',
//     bandName: 'band name',
//     songs: [
//       {
//         position: '1',
//         songName: 'foo',
//         songUrl: 'path/to/songUrl'
//       },
//       {
//         position: '2',
//         songName: 'bar',
//         songUrl: 'path/to/songUrl'
//       },
//       {
//         position: '3',
//         songName: 'baz',
//         songUrl: 'path/to/songUrl'
//       }
//     ],
//     type: 'album'
//   }
// }

export default function Audio(e, moveSectionDown) {
  return (
    <div>
      <AudioPlayer />
      {/*  <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/> */}
      {!e.last && (
        <aside className="icon-scroll u-scroll" onClick={moveSectionDown} />
      )}
    </div>
  );
}
