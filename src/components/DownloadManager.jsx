import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function DownloadManager({ onPlayVideo }) {
  const [downloads, setDownloads] = useState([]);

  const handleSimulateDownload = () => {
    try {
      // This function simulates adding a completed download
      const newDownload = {
        id: Math.random().toString(36).substring(7),
        name: 'Sample Video ' + (downloads.length + 1),
        status: 'completed',
      };
      setDownloads([...downloads, newDownload]);
    } catch (error) {
      Sentry.captureException(error);
      console.error(error);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Download Manager</h2>
        <button
          onClick={handleSimulateDownload}
          className="cursor-pointer px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition-colors"
        >
          Simulate Download
        </button>
      </div>
      {downloads.length < 1 ? (
        <p className="text-gray-600 italic">No downloads yet.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {downloads.map((download) => (
            <li key={download.id} className="flex items-center justify-between gap-2 bg-gray-50 p-2 rounded">
              <span>{download.name}</span>
              {download.status === 'completed' && (
                <button
                  onClick={() => onPlayVideo(download)}
                  className="cursor-pointer px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Play
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}