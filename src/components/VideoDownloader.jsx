import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import VideoInput from './VideoInput';
import DownloadControls from './DownloadControls';

export default function VideoDownloader() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [format, setFormat] = useState('mp4');
  const [resolution, setResolution] = useState('720p');
  const [isLoading, setIsLoading] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setYoutubeUrl(text);
    } catch (error) {
      Sentry.captureException(error);
      console.error(error);
    }
  };

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      console.log('Initiating download request');
      // Here you would call an API to download the video
      // For demonstration, we simulate a short delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert('Download started for ' + youtubeUrl);
    } catch (error) {
      Sentry.captureException(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-semibold mb-2">Video Downloader</h2>
      <div className="flex flex-col gap-2">
        <VideoInput
          youtubeUrl={youtubeUrl}
          setYoutubeUrl={setYoutubeUrl}
          handlePaste={handlePaste}
        />
        <DownloadControls
          format={format}
          setFormat={setFormat}
          resolution={resolution}
          setResolution={setResolution}
          handleDownload={handleDownload}
          isLoading={isLoading}
          youtubeUrl={youtubeUrl}
        />
      </div>
    </div>
  );
}