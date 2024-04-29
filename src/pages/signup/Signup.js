// import { React, useState } from "react";
// import "./Signup.css";
// import { Link, useNavigate } from "react-router-dom";
// import { AppLogo } from "../../components/icons";
// import { FaQrcode } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { MdLanguage } from "react-icons/md";
// import { TbTarget } from "react-icons/tb";
// import axios from "axios";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [valid, setValid] = useState(true);
//   const navigate = useNavigate()
//   const submitHandler = (e) => {

//     e.preventDefault();
//     console.log(formData);
//     let isValid = true;
//     let validationError = {};
//     if (formData.name === "") {
//       isValid = false;
//       validationError.name = "Name is Required ";
//     }
//     if (formData.email === "") {
//       isValid = false;
//       validationError.email = "Email is Required ";
//     }
//     if (formData.password === "") {
//       isValid = false;
//       validationError.password = "Password is Required ";
//     } else if (formData.password.length < 6) {
//       isValid = false;
//       validationError.password = "Password length is less than 6 characters";
//     }

//     setErrors(validationError);
//     setValid(isValid);

//     if (Object.keys(validationError).length === 0) {
//       axios
//         .post("http://localhost:8000/users", formData)
//         .then((res) => {
//           alert("Success!");
//           navigate('/login')
//         })
//         .catch((err) => console.log(err));
//     }
//   };
//   return (
//     <div className="form-section">
//       <div className="form-cart">
//         <div>
//           <Link to="/">
//             <AppLogo className="app-logo" />
//           </Link>
//           <form onSubmit={(e) => submitHandler(e)}>
//             <div className="form-headline">
//               <p className="form-title">Welcome to Binance</p>
//             </div>
            
//             <label>Name</label>
//             <input
//               type="text"
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//             ></input>
//             {
//               valid && <span>{errors.name} ; error </span>
//             }
//             <label>Email</label>
//             <input
//               type="text"
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             ></input>
//             <label>Password</label>
//             <input
//               type="password"
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//             ></input>
//             <p className="agreement-text">
//               By creating an account, I agree to Binance's Terms of Service and
//               Privacy Policy.
//             </p>
//             <button className="btn next-btn">Next</button>
//           </form>
//           <div className="css-xpcra5">
//             <div className="css-3piyph"></div>
//             <p className="css-n6cikb">or</p>
//             <div className="css-3piyph"></div>
//           </div>
//         </div>
//         <div>
//           <button className="btn acount-btn">
//             <FcGoogle className="btn-icon" />
//             <p>Continue with Google</p>
//           </button>
//           <button className="btn acount-btn">
//             <FaApple className="btn-icon" />
//             <p>Continue with Apple</p>
//           </button>
//         </div>
//       </div>
//       <Link to="/login" className="login-link">
//         signup as an entity <span>or</span> Log in
//       </Link>
//       <div className="form-footer">
//         <ul className="form-footer-list">
//           <li className="form-footer-item">
//             <MdLanguage />
//             English
//           </li>
//           <li className="form-footer-item">Cookies</li>
//           <li className="form-footer-item">Terms</li>
//           <li className="form-footer-item">Privacy</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import { React, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { AppLogo } from "../../components/icons";
import { FaQrcode } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { TbTarget } from "react-icons/tb";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formData.name === "" &&
      formData.email === "" &&
      formData.password === ""
    ) {
      setValid();
    }

    if (valid === true) {
      axios
        .post("http://localhost:8000/users", formData)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };
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
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
            {valid ? "" : <p className="input-error">Name is Required</p>}
            <label>Email</label>
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
            {valid ? "" : <p className="input-error">Email is Required</p>}
            <label>Password</label>
            <input
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            ></input>
            {valid ? "" : <p className="input-error">Password is Required</p>}
            <p className="agreement-text">
              By creating an account, I agree to Binance's Terms of Service and
              Privacy Policy.
            </p>
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
