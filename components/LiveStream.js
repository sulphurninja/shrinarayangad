import React from 'react';

const LiveStream = () => {
  // Array of YouTube video IDs
  const videoIds = ['1zQE2LGsDSs', 'gfwuTkeWPjU', 'dotDrUEKszQ', 'fBcf2VrcH8w', '1wYaQTxp1wM', 'Cj-uPH6gUVY'];



  return (
    <div className="   gap-4">
    <div className='grid grid-cols-2 gap-4'>
      {videoIds.map(videoId => (
        <div key={videoId} className="relative h-48 w-full rounded-lg overflow-hidden shadow-md ">
          {/* YouTube player container */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Embed your YouTube video using an iframe */}
            <iframe
              id={`youtubePlayer_${videoId}`}
              title={`YouTube Video ${videoId}`}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&modestbranding=1&disablekb=1&enablejsapi=1&fs=0&iv_load_policy=3&rel=0&showinfo=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          {/* Overlay controls */}
        
        </div>
      ))}
      </div>
    </div>
  );
};

export default LiveStream;
