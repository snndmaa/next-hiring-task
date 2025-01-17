import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      <span className="ml-4 text-xl">Loading...</span>
    </div>
  );
};

export default Loading;