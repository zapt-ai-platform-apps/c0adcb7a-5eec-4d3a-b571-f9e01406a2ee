import React, { useState } from 'react';
import VideoDownloader from './components/VideoDownloader';
import DownloadManager from './components/DownloadManager';
import VideoPlayer from './components/VideoPlayer';
import HelpSupport from './components/HelpSupport';

export default function App() {
  const [showHelp, setShowHelp] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleShowHelp = () => {
    setShowHelp(!showHelp);
  };

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 bg-gray-100 border-b border-gray-300">
        <h1 className="text-xl font-bold">YouTube Video Downloader</h1>
      </header>

      {/* Main Content */}
      <main className="h-full flex-1 p-4 flex flex-col gap-4">
        {/* Conditionally show help or main sections */}
        {showHelp ? (
          <HelpSupport />
        ) : (
          <>
            <VideoDownloader />
            <DownloadManager onPlayVideo={handlePlayVideo} />
            {selectedVideo && <VideoPlayer video={selectedVideo} />}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 p-4 flex items-center justify-between">
        {/* Help Link */}
        <button
          onClick={handleShowHelp}
          className="cursor-pointer px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          {showHelp ? 'Back' : 'Help & Support'}
        </button>

        {/* Made on ZAPT Badge */}
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}