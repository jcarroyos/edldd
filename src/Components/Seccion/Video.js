import React from 'react';

export default function Video({ e, moveSectionDown }) {
  return (
    <div className="section">
      {e.e.video !== '' && (
        <video id={e.e.index} data-autoplay controls>
          <source data-src={`edldd/${e.e.video_mp4}`} type="video/mp4" />
          <source data-src={`edldd/${e.e.video_webm}`} type="video/webm" />
        </video>
      )}
      {!e.last && <aside className="icon-scroll" onClick={moveSectionDown} />}
    </div>
  );
}
