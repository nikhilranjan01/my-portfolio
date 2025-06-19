import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form action="https://formspree.io/f/meoepjze" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" name="message" id="message" rows="4" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
