import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../FireBase/Firebase-confiq";
import Swal from "sweetalert2";

const Login = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      Swal.fire({
        text: "Login Succesful",
        icon: "success",
      });
      navigate("/home")
    });
  };

  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={12} className=" p-5">
          <img
            className="logo ms-5 mt-3"
            src="https://i.postimg.cc/kXV7j29R/Screenshot-2024-05-02-153000-removebg-preview.png"
            alt=""
          />
          <Container className="p-5 ms-5 mt-5 login-form-body">
            <div>
              <h2>LOGIIN</h2>
              <p className="ms-5 me-5 mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                est inventore, facere incidunt nihil ullam quos placeat! Numquam
                veniam ullam soluta voluptatum fuga error? Ipsam obcaecati
                doloribus velit incidunt nostrum. Lorem ipsum Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Pariatur
              </p>

              <button className="login-btn p-2 mt-4" onClick={handleLogin}>
                <img
                  className="google-logo me-2 "
                  src="https://i.postimg.cc/2jJWtfQ3/images-1.png"
                  alt=""
                />
                <b>Sign In With Google</b>
              </button>
            </div>
          </Container>
        </Col>
        <Col lg={6} md={6} sm={12} className="text-end img">
          <img
            className="loginPage-img"
            src="https://i.postimg.cc/KjkDWPJH/Screenshot-2024-05-02-124755.png"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};
export default Login;
