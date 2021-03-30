import React from 'react';
import '../style/VideoCard.css';

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <p>This is a cool film</p>
      <img src="https://media.deseretdigital.com/file/23f7ee7234?type=jpeg&quality=55&c=15&a=4379240d" alt="" />
      <h2>Movie Title</h2>
      <p>Number of likes...</p>

    </div>
  )
}

export default VideoCard;
