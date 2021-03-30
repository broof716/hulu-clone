import React from 'react';
import '../style/VideoCard.css';

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c2/46/f8.jpg" alt="" />
      <p>This is a cool film</p>
      <h2>Movie Title</h2>
      <p>Number of likes...</p>

    </div>
  )
}

export default VideoCard;
