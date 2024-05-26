import { React, useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AppLogo } from "../../components/icons";
import { FaQrcode } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import Input from "../../components/form/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";
import { useForm } from "../../hooks/useForm";

export default function Login() {
  const [allUsers, setAllUsers] = useState(null);
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");

    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const [formState, onInputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  return (
    <div className="form-section">
      <div className="form-cart">
        <div>
          <Link to="/">
            <AppLogo className="app-logo" />
          </Link>
          <div className="form-headline">
            <p className="form-title">Login</p>
            <div className="form-qrcode">
              <FaQrcode className="form-qrcode-icon" />
            </div>
          </div>
          <form onSubmit={(e) => submitHandler(e)}>
            <label>Email</label>
            <Input
              type="text"
              id="email"
              validations={[requiredValidator(), emailValidator()]}
              onInputHandler={onInputHandler}
            ></Input>
            <label>password</label>
            <Input
              type="password"
              id="password"
              validations={[
                requiredValidator(),
                minValidator(6),
                maxValidator(16),
              ]}
              onInputHandler={onInputHandler}
            ></Input>
            <button
              className="btn next-btn"
              disabled={!formState.isFormValid}
              onClick={submitHandler}
            >
              Next
            </button>
          </form>
          <div className="css-xpcra5">
            <div className="css-3piyph"></div>
            <p className="css-n6cikb">or</p>
            <div className="css-3piyph"></div>
          </div>
        </div>
        <div>
          <button className="btn acount-btn">
            <FcGoogle className="btn-icon" />
            <p>Continue with Google</p>
          </button>
          <button className="btn acount-btn">
            <FaApple className="btn-icon" />
            <p>Continue with Apple</p>
          </button>
        </div>
      </div>
      <Link to="/signup" className="signup-link">
        Create a Binance Account
      </Link>
      <div className="form-footer">
        <ul className="form-footer-list">
          <li className="form-footer-item">
            <MdLanguage />
            English
          </li>
          <li className="form-footer-item">Cookies</li>
          <li className="form-footer-item">Terms</li>
          <li className="form-footer-item">Privacy</li>
        </ul>
      </div>
    </div>
  );
}
