import { React, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AppLogo } from "../../components/icons";
import { FaQrcode } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    let isValid = true;
    let validationError = {};

    if (formData.email === "") {
      isValid = false;
      validationError.email = "Email is Required ";
    }
    if (formData.password === "" ) {
      isValid = false;
      validationError.password = "Password is Required ";
    } else if (formData.password.length < 6) {
      isValid = false;
      validationError.password = "Password length is less than 6 characters";
    }
    
    setErrors(validationError);
    setValid(isValid);

    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        console.log(res.data);
        res.data.map((user) => {
          if (user.email === formData.email && user.password === formData.password) {
            navigate('/#')
          } else {
            alert('l')
          }
        });

      })
      .catch((err) => console.log(err));
  };

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
          {valid ? "" : <p className="input-error">{errors.name}</p>}
          <form onSubmit={(e) => submitHandler(e)}>
            <label>Email</label>
            <input type="text" onChange={(e) => setFormData({ ...formData, email: e.target.value })}></input>
            <label>password</label>
            <input type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })}></input>
            <button className="btn next-btn">Next</button>
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
