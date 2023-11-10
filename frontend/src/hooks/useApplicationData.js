import { useState, useEffect } from 'react';

const useApplicationData = () => {
  
  const [ photos, setPhotos ] = useState([]);
  const [ topics, setTopics ] = useState([]);

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json().then((data) => setPhotos([...data])));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json().then((data) => setTopics([...data])));
  }, []);

  const getPhotosByTopics = topicId => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json().then((data) => setPhotos([...data])));
  };

  return {
    photos,
    topics,
    getPhotosByTopics
  };

};

export default useApplicationData;