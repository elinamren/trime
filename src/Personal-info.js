import { useState } from "react";
import { Link } from "react-router-dom";
import BackArrow from "./components/back-arrow";
import Dot from "./components/Dot";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState("");

  function createAccount() {
    const account = { name, city, email, password, terms };
  }

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
        <form onSubmit={createAccount}>
          <div className="field-container">
            <label className="form-heading" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-heading" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label className="form-heading" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-heading" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label className="terms-container" htmlFor="terms">
            I agree to the <a href="/">terms of service</a> and{" "}
            <a href="/">privacy policy</a>
            <input
              type="checkbox"
              name="terms"
              id="terms"
              value={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span className="checkmark"></span>
          </label>
          <Link to="/home">
            <button
              onClick={createAccount}
              type="submit"
              className="yellow-button large-margin-top"
            >
              Create account
            </button>
          </Link>
        </form>
        <Dot />
        <Dot color="yellow-button" />
      </div>
    </div>
  );
};

export default PersonalInfo;
