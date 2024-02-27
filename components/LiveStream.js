import React, { useEffect } from 'react';

const LiveStream = () => {
  useEffect(() => {
    // Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual YouTube video ID of your live stream
    const videoId = 'gonI8yFHkqU';

    // Load YouTube iFrame API
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize YouTube player once the API is loaded
      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player('youtubePlayer', {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            iv_load_policy: 3,
            rel: 0,
            showinfo: 0,
          },
          events: {
            onReady: onPlayerReady,
          },
        });
      };
    };

    const onPlayerReady = (event) => {
      // You can perform any actions when the player is ready
    };

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='relative h-96  mt-4  overflow-hidden shadow-md bg-gray-800'>
      {/* YouTube player container */}
      <div
        id='youtubePlayer'
        className='absolute top-0 left-0 w-full h-full'
      ></div>

      {/* Optional overlay or controls */}
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        {/* You can add play/pause button, controls, or other overlays here */}
      </div>
    </div>
  );
};

export default LiveStream;
