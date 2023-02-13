import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {Card} from "antd";
import logo from "./logo.png";

// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6ohaq1s', 'template_fifshuk', form.current, 'djaBi7EN_GyqdFMiU')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };

  return <div className="StyledContactForm">
    <Card justify="center" align="middle">
    <img  src={logo}  alt="img1" height={600} width={800}/>
    </Card>
    <Card type="primary" style={{ background:"skyblue", borderColor: "white" }} justify="right" align="middle">
    <form ref={form} onSubmit={sendEmail}>
        <p>Write Me a Message!</p>
     
        <input placeholder="Name" type="text" name="user_name" />
        <br></br> <br></br>
       
        <input placeholder="Email" type="email" name="user_email" />
        <br></br> <br></br>
       
        <textarea placeholder="Message" name="message" />
        <br></br>
        <input className="btn btn-outline-dark " type="submit" value="Send" />
        <br></br> <br></br>
        <p> Address: Dagupan, Pangasinan <br></br>Email: liga.cruz@phinmaed.com </p> <p>Phone No: +639915724088</p>
    </form>
    </Card>
    </div>



};

export default Contact;

