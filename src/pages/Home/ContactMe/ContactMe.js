import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import contact from '../../../images/contact.gif'
import bg from '../../../images/1.gif'
import './ContactMe.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const ContactMe = () => {
    React.useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container data-aos="zoom-out" className='contact'>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} className='background' style={{ width: '75%', borderRadius: '15px' }}>
                    <img src={contact} alt="" />
                    {/* <h2 className='text'>Please write your opinion.</h2> */}
                </Grid>
                <Grid item xs={12} md={6}>

                    <form action="https://formsubmit.co/farzanapomy56@gmail.com" method="POST" >
                        <TextField id="standard-basic"
                            variant="standard"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            sx={{ m: 1, backgroundColor: 'white', borderRadius: '10px', padding: '2% 15%' }}
                        />

                        <TextField id="standard-basic"
                            variant="standard"
                            type="text"
                            name="name"
                            placeholder='Write you name'
                            sx={{ m: 1, backgroundColor: 'white', borderRadius: '10px', padding: '2% 15%' }}
                            required />

                        <TextField id="standard-basic"
                            variant="standard"
                            type="message"
                            name="message"
                            placeholder="Write about your opinion"
                            sx={{ m: 1, backgroundColor: 'white', borderRadius: '10px', padding: '2% 15%' }}
                            required />
                        <br />
                        <Button

                            sx={{ m: 1, backgroundColor: '#efead7', borderRadius: '10px', padding: '2% 15%' }}
                            type="submit">
                            Send
                        </Button>
                    </form>

                </Grid>

            </Grid>




        </Container>

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