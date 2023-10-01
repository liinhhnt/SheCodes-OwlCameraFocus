import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./style.scss";
import OwlImage from "../../assets/image/owl-logo.png";

const LoginGreeting = (props) => {
  return (
    <div className="login-greeting">
      <div className="text-container">
        {props.type === "login" &&
          "Xin chào bạn! Owl sẽ đồng hành cùng bạn trong quá trình tăng sự tập trung"}{" "}
        {props.type === "register" &&
          "Xin chào bạn! Owl sẽ đồng hành cùng bạn trong quá trình tăng sự tập trung"}
        {(props.type === "forgot-password" ||
          props.type === "reset-password") &&
          "Xin chào bạn! Owl sẽ đồng hành cùng bạn trong quá trình tăng sự tập trung"}
      </div>
      <div className="image-container">
        <img src={OwlImage} alt="Owl logo" />
      </div>
    </div>
  );
};

export default LoginGreeting;
