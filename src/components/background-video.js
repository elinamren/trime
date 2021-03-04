import video from "../images/pt-video.mp4";

const BackgroundVideo = () => {
  return (
    <div id="background-video">
      <video autoplay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
