import React from "react";
import TopicListItem from "./TopicListItem";
// import topics from "../mocks/topics"; // TODO: Consume in App.jsx

import "../styles/TopicList.scss";

const TopicList = (props) => {
  
  const topicList = props.topics.map((topic) => {
    return (<TopicListItem topicTitle={topic.title} key={topic.id} />);
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
