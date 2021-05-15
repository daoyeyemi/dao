import React from "react";
import NavBar from "../components/NavBar";
import Body from "../components/Body";
// import ContactForm from "../components/ContactForm";
import Form from "../components/ContactForm/Form";
import "./styles.css";

function Contact() {
    return (
    <div className="Contact">
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10
          }}
        >
            <NavBar />
        </div>
        <div 
        style={{
            position: "absolute",
            top: 70,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10
            }}
        >
            <Form />
        </div>
    </div>
    )
}

export default Contact;