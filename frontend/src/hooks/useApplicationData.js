import { useState, useEffect } from 'react';

const useApplicationData = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  const fetchData = async(url, setState) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("/api/photos", setPhotos);
  }, []);

  useEffect(() => {
    fetchData("/api/topics", setTopics);
  }, []);

  const getPhotosByTopics = async(topicId) => {
    await fetchData(`/api/topics/photos/${topicId}`, setPhotos);
  };

  return {
    photos,
    topics,
    getPhotosByTopics
  };
};

export default useApplicationData;