import { Container, TextField, Typography } from '@mui/material';
import React from 'react';
import './ContactMe.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import contact2 from '../../../images/contact.jpg'
const ContactMe = () => {
    React.useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container data-aos="zoom-out" className='contact'>

            <div className='contact-form'>
                {/* <img src={contact2} alt="" style={{ width: '75%', padding: '10px', borderRadius: '20px' }} /> */}
                <Typography variant='h2' sx={{ margin: '20px', color: '#64ffdbaf' }}>Contact me</Typography>
                <form action="https://formsubmit.co/farzanapomy56@gmail.com" method="POST" >

                    <TextField id="standard-basic"
                        variant="standard"
                        type="text"
                        name="name"
                        placeholder='Write you name'
                        className='text-field'
                        sx={{ margin: '5px', padding: '8px', borderRadius: '5px' }}
                        required />

                    <TextField id="standard-basic"
                        variant="standard"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        sx={{ margin: '5px', padding: '8px', borderRadius: '5px' }}
                        required
                        className='text-field'
                    />
                    <TextField id="standard-basic"
                        variant="standard"
                        type="text"
                        name="number"
                        placeholder="Your Phone Number"
                        sx={{ margin: '5px', padding: '8px', borderRadius: '5px' }}
                        required
                        className='text-field'
                    />

                    <TextField id="standard-basic"
                        variant="standard"
                        type="message"
                        name="message"
                        placeholder="Write about your opinion"
                        sx={{ margin: '5px', padding: '8px ', borderRadius: '5px' }}
                        className='text-field'
                        rows={4}
                        multiline
                        required />
                    <br />

                    <button
                        className='text-button'
                        type="submit">
                        Send
                    </button>
                </form>


            </div>



        </Container >

    );
};

export default ContactMe;

