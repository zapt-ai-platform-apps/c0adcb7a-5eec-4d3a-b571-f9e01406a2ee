import React from 'react';

export default function VideoInput({ youtubeUrl, setYoutubeUrl, handlePaste }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="flex-1 box-border p-2 border border-gray-300 rounded"
        placeholder="Enter YouTube URL"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
      />
      <button
        onClick={handlePaste}
        className="cursor-pointer px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        Paste
      </button>
    </div>
  );
}