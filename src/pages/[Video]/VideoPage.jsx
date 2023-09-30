import React from "react";
import Video from "../../components/Video/Video";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="w-full">
      <Video src={id} />
    </div>
  );
};

export default VideoPage;
