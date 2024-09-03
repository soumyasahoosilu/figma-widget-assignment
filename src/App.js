import React from 'react';
import LeftHalf from './components/LeftHalf';
import WidgetTabs from './components/WidgetTabs';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div className="flex h-screen">
      <LeftHalf />
      <div className="flex-1 flex flex-col p-8 space-y-8">
        <WidgetTabs />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default App;
