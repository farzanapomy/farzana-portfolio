import React from 'react';

const ContactMe = () => {


    return (

        <form action="https://formsubmit.co/pomyfarzana@gmail.com" method="POST" >
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="name" required />
            <input type="message" name="message" cols="30" rows="10" placeholder required />
            {/* <textarea name="" id="" /> */}
            <button type="submit">Send</button>
        </form>


    );
};

export default ContactMe;



/*
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default ContactMe;
*/