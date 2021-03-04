import video from "../images/pt-video.mp4";

const BackgroundVideo = () => {
  return (
    <div id="background-video">
      <video playsInline autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
