import React, { useState } from 'react';

function GalleryWidget() {
  const [images, setImages] = useState([]);

  const addImage = () => {
    const newImage = `https://via.placeholder.com/150?text=Image+${images.length + 1}`;
    setImages([...images, newImage]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Gallery</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-2 bg-gray-300 rounded-lg">&larr;</button>
          <button className="px-3 py-2 bg-gray-300 rounded-lg">&rarr;</button>
          <button onClick={addImage} className="px-4 py-2 bg-blue-500 text-white rounded-lg">+ Add Image</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="w-full h-auto object-cover rounded-md" />
        ))}
      </div>
    </div>
  );
}

export default GalleryWidget;
