import { Button, TextField } from '@mui/material';
import React from 'react';

const ContactMe = () => {


    return (

        <form action="https://formsubmit.co/pomyfarzana@gmail.com" method="POST" >
            <TextField id="standard-basic"
                variant="standard"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                sx={{ width: '50%', m: 1 }}
            />

            <TextField id="standard-basic"
                variant="standard"
                type="text"
                name="name"
                placeholder='Write you name'
                sx={{ width: '50%', m: 1 }}
                required />

            <TextField id="standard-basic"
                variant="standard"
                type="message"
                name="message"
                placeholder="Write about your opinion"
                sx={{ width: '50%', m: 1 }}
                required />
            <br />
            <Button
                variant='contained'
                sx={{ width: '25%', m: 1 }}
                type="submit">
                Send
            </Button>
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