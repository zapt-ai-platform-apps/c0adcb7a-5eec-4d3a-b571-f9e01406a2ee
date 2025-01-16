import React from 'react';

export default function HelpSupport() {
  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-semibold mb-2">Help & Support</h2>
      <div className="mb-4">
        <p className="font-medium">FAQ:</p>
        <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
          <li>Make sure you have a stable internet connection.</li>
          <li>Check that the YouTube URL is correct.</li>
          <li>Respect copyright laws and YouTube terms of service.</li>
        </ul>
      </div>
      <div>
        <p className="font-medium">Contact Support:</p>
        <p className="text-sm text-gray-700">
          If you need direct assistance, please reach out through our official support form or email us.
        </p>
      </div>
    </div>
  );
}