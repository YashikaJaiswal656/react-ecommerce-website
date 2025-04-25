import Header from '../components/header';
import Footer from '../components/footer';
import Show from '../components/show';
import "./contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const userEmail = form.current['email'].value;
        const message = form.current['message'].value

        emailjs.sendForm('service_mb8hpn2', 'template_b6dozv4', form.current, 'i6elabJMDY_oJFU1x')
            .then((result) => {
                console.log(result.text);

                Swal.fire({
                    icon: 'success',
                    title: 'Message sent successfully',
                    text: 'A Confirmation Mail Is Sent To Your Email',
                    confirmButtonColor: '#b0b435',
                })

                // Send confirmation email
                emailjs.send('service_mb8hpn2', 'template_sk08r2v', { // <-- replace with your real template ID
                    email: userEmail,
                    message: message,
                }, 'i6elabJMDY_oJFU1x')
                    .then((res) => {
                        console.log("Confirmation email sent", res.text);
                    }).catch((err) => {
                        console.error("Confirmation email failed", err.text);
                    });

            }, (error) => {
                console.log(error.text);
                alert("Failed to send message.");
            });

        e.target.reset();
    };
    return (
        <>

            <Header />

            <div className="detail_cont">
                <div className="detail_back char">
                    <h1>Contact</h1>
                    <button className='btn_3'>Contact</button>
                </div>
            </div>
            <div className="contact_container">
                <div className="contact_cont">

                    <div class="contact_formm">
                        <h2>GET IN TOUCH</h2>
                        <p>We’re here to help! Whether you have questions about your order, need help with a product, or just want to say hello — feel free to reach out.

                            Customer Support Hours:
                            Monday – Saturday: 9:00 AM – 6:00 PM</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" placeholder="Your Name" name='name' required />
                            <input type="email" placeholder="Your Email" name='email' required />
                            <input type="text" placeholder="Subject" name='subject' required />
                            <textarea placeholder='Your Message' name='message' required></textarea>

                            <button className='btn_3'>Send Message</button>
                        </form>
                    </div>


                    <div class="contact_add">

                        <h2>CONTACT INFO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                        <ul>
                            <li>
                                <p><i class="fas fa-map-marker-alt"></i>Address: Jwala Nagar Shahdara</p>
                            </li>
                            <li>
                                <p><i class="fas fa-phone-square"></i>Phone: <a href="tel:+91 8448260587">+91 8448260587</a></p>
                            </li>
                            <li>
                                <p><i class="fas fa-envelope"></i>Email: <a href="mailto:yashikajaiswal30@gmail.com">yashikajaiswal30@gmail.com</a></p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
            <Show />
            <Footer />

        </>
    )
}

export default Contact;