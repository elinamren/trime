import BackArrow from "./components/back-arrow";
import Dot from "./components/Dot";

const PersonalInfo = () => {
  return (
    <div>
      <BackArrow path="/goals" />
      <div className="personal-info-header">
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
          <div className="field-container">
            <label className="form-heading" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" id="name" />
            <label className="form-heading" htmlFor="city">
              City
            </label>
            <input type="text" name="city" id="city" />
            <label className="form-heading" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" />
            <label className="form-heading" htmlFor="password">
              Password
            </label>
            <input type="password" name="password" id="password" />
          </div>
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
