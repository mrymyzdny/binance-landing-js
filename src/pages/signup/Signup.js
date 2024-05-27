import React from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { AppLogo } from "../../components/icons";
import { FaQrcode } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { TbTarget } from "react-icons/tb";
import Input from "../../components/form/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import { useMainContext } from "../../context/MainContext";


export default function Signup() {
  // const { formData } = useMainContext();

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const newUserInfo = {
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };

    fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserInfo),
    }).then((res) => console.log(res));

    navigate("/login");
  };

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
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

  // useEffect(() => {
  //   if(formData){
  //     console.lo()
  //   }
  // } , [formData])

  return (
    <div className="form-section">
      <div className="form-cart">
        <div>
          <Link to="/">
            <AppLogo className="app-logo" />
          </Link>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="form-headline">
              <p className="form-title">Welcome to Binance</p>
            </div>
            <label>Name</label>
            <Input
              type="text"
              id="name"
              validations={[
                requiredValidator(),
                minValidator(4),
                maxValidator(20),
              ]}
              onInputHandler={onInputHandler}
            ></Input>
            <label>Email</label>
            <Input
              type="text"
              id="email"
              validations={[requiredValidator(), emailValidator()]}
              onInputHandler={onInputHandler}
            ></Input>
            <label>Password</label>
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
            <p className="agreement-text">
              By creating an account, I agree to Binance's Terms of Service and
              Privacy Policy.
            </p>
            <button
              className="btn next-btn"
              onClick={submitHandler}
              disabled={!formState.isFormValid}
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
      <Link to="/login" className="login-link">
        signup as an entity <span>or</span> Log in
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
