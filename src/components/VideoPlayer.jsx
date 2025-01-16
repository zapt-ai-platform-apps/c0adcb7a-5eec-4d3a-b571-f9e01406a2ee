import React from 'react';

export default function VideoPlayer({ video }) {
  // This component simulates a video player UI
  // In a real integration, you'd load the downloaded file or stored path
  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-semibold">Video Player</h2>
      <p className="mb-2">Now playing: {video.name}</p>
      <div className="w-full h-48 bg-black text-white flex items-center justify-center">
        <span>Video Placeholder</span>
      </div>
    </div>
  );
}