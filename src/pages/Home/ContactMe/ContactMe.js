import React from 'react';

const ContactMe = () => {
    return (

        <form action="https://formsubmit.co/pomyfarzana@gmail.com" method="POST">
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="name" required />
            <input type="message" name="message" placeholder='write your massage' required />
            <textarea name="" id="" cols="30" rows="10" />
            <button type="submit">Send</button>
        </form>


    );
};

export default ContactMe;