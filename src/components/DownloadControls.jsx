import React from 'react';

export default function DownloadControls({
  format,
  setFormat,
  resolution,
  setResolution,
  handleDownload,
  isLoading,
  youtubeUrl
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <select
          className="box-border p-2 border border-gray-300 rounded"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="mp4">MP4</option>
          <option value="avi">AVI</option>
          <option value="mkv">MKV</option>
          <option value="mp3">MP3 (Audio)</option>
        </select>

        <select
          className="box-border p-2 border border-gray-300 rounded"
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        >
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
          <option value="4k">4K</option>
        </select>
      </div>

      <button
        onClick={handleDownload}
        disabled={isLoading || !youtubeUrl}
        className={`cursor-pointer px-3 py-2 rounded bg-blue-600 text-white transition-colors ${
          isLoading || !youtubeUrl ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
      >
        {isLoading ? 'Loading...' : 'Download'}
      </button>
    </div>
  );
}