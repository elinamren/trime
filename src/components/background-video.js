const BackgroundVideo = () => {
    return (       
    <video autoplay muted loop id="background-video">
    <source
      src="../images/pt-video.mp4"
      type="video/mp4"
    />
  </video> 
  );
}
 
export default BackgroundVideo;