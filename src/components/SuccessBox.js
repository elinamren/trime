const SuccessBox = () => {


  function handleClick(e) {
    e.preventDefault();
    if (e.target.id === "go-to-profile") {
      console.log("first button clicked")
    } else {
      console.log("other button clicked")
    };
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>
          Welcome to Trime, <br />
          Happy to have you onboard!
        </h3>
        <p>
          To book a session we need a little more information from you, but you
          don't need to fill out this right now if you don't want to. Just close
          this window and Let's go explore the app!
        </p>
        <button
          onClick={handleClick}
          className="small-button not-important-button"
          id="go-to-profile"
        >
          Go to profile
        </button>
        <button 
        onClick={handleClick} 
        className="small-button"
        id="close-window"
        >
          Let's explore
        </button>
      </div>
    </div>
  );
};

export default SuccessBox;
