import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact({ id }) {
  const formRef = useRef();

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleSubmit = (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Loading state
      submitBtn.classList.add("loading");
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';

      // Send email using EmailJS
      emailjs
        .sendForm(
          "service_z56kjmt",   // 🔑 Replace with your EmailJS Service ID
          "template_qwlaeof",  // 🔑 Replace with your EmailJS Template ID
          form,
          "Ce5qYixiIEsHivrOY"    // 🔑 Replace with your EmailJS Public Key
        )
        .then(
          () => {
            // Success
            submitBtn.classList.remove("loading");
            submitBtn.innerHTML =
              '<i class="fas fa-check"></i> <span>Message Sent!</span>';
            form.reset();
            showNotification("Message sent successfully!", "success");

            // Reset button text after 2s
            setTimeout(() => {
              submitBtn.innerHTML = originalText;
            }, 2000);
          },
          (error) => {
            console.error("EmailJS Error:", error.text);
            submitBtn.classList.remove("loading");
            submitBtn.innerHTML = originalText;
            showNotification("Failed to send message. Try again.", "error");
          }
        );
    };

    const showNotification = (message, type = "info") => {
      const notification = document.createElement("div");
      notification.className = `notification notification-${type}`;
      notification.innerHTML = `
        <div class="notification-content">
          <i class="fas fa-${
            type === "success"
              ? "check-circle"
              : type === "error"
              ? "times-circle"
              : "info-circle"
          }"></i>
          <span>${message}</span>
        </div>
      `;
      document.body.appendChild(notification);
      setTimeout(() => notification.classList.add("show"), 100);
      setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => document.body.removeChild(notification), 300);
      }, 3000);
    };

    form.addEventListener("submit", handleSubmit);

    // Focus/blur label handling
    const formInputs = form.querySelectorAll("input, textarea");
    formInputs.forEach((input) => {
      input.addEventListener("focus", (e) => {
        e.target.parentElement.classList.add("focused");
      });
      input.addEventListener("blur", (e) => {
        if (!e.target.value)
          e.target.parentElement.classList.remove("focused");
      });
    });

    return () => {
      form.removeEventListener("submit", handleSubmit);
      formInputs.forEach((input) => {
        input.removeEventListener("focus", () => {});
        input.removeEventListener("blur", () => {});
      });
    };
  }, []);

  return (
    <section
      id={id}
      className="section"
      style={{ display: "block", opacity: 1, transform: "translateY(0)" }}
    >
      <div className="section-header">
        <span className="section-number">04</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out if you'd like to collaborate or just say
            hello!
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <span>zianalfonso0518@gmai.com</span>
            </div>
            <div className="contact-method">
              <i className="fas fa-phone"></i>
              <span>+63 917 184 0254</span>
            </div>
            <div className="contact-method">
              <i className="fas fa-map-marker-alt"></i>
              <span>Philippines</span>
            </div>
          </div>
        </div>

        <form className="contact-form" id="contactForm" ref={formRef}>
          <div className="form-group">
            <input type="text" id="name" name="user_name" required />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" name="user_email" required />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-group">
            <input type="text" id="subject" name="subject" required />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" rows="5" required></textarea>
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i>
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}
