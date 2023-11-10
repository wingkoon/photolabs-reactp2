import { useState, useEffect } from 'react';

const useApplicationData = () => {
  
  const [ photos, setPhotos ] = useState([]);
  const [ topics, setTopics ] = useState([]);

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json().then((data) => setPhotos([...data])));
  }, []); // Rendering once only.

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json().then((data) => setTopics([...data])));
  }, []); // Rendering once only.

  return {
    photos,
    topics
  };

};

export default useApplicationData;