import Dot from "./components/Dot";

const PersonalInfo = () => {
  return (
    <div>
      <div className="personal-info-header header-container">
        <p className="paragraph-padding">Are you ready?</p>
        <h1>
          It's
          <br />
          training
          <br />
          time
        </h1>
      </div>
      <div className="form-container">
        <form>
          <input type="text" name="name" id="name" placeholder="Name..." />
          <input type="text" name="city" id="city" placeholder="City..." />
          <input type="email" name="email" id="email" placeholder="Email..." />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
          />

          <label className="terms-container" htmlFor="terms">
            I agree to the <a href="/">terms of service</a> and{" "}
            <a href="/">privacy policy</a>
            <input type="checkbox" name="terms" id="terms" />
            <span className="checkmark"></span>
          </label>
          <button type="submit" className="yellow-button large-margin-top">
            Create account
          </button>
        </form>
        <Dot />
        <Dot color="yellow-button" />
      </div>
    </div>
  );
};

export default PersonalInfo;
