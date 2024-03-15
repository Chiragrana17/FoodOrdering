import React from "react";
import { Link } from "react-router-dom";
import myvideo from "./intro.mp4";
import "./style.css";
const Footer = () => {
  return (
    <>
      <div
        className="video"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <video
          autoPlay
          controls
          width={1000}
          style={{ boxShadow: "1px 0px 50px 0px rgb(0,50,60)" }}
        >
          <source src={myvideo} type="video/mp4" />
          your browser doest not support the video tag.
        </video>
      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className="text-muted">© 2024 GoFood, Inc</span>
        </div>
        <div
          className="w-full max-w-md h-25 p-6"
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        ></div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"></ul>
      </footer>
    </>
  );
};

export default Footer;
