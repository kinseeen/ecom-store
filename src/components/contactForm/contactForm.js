import React, { useState, useForm } from "react";
import "../contactForm/contactForm.css";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    setEmailAddress("");
    setFullName("");
    setSubject("");
  }

  function onNameChange(event) {
    const value = event.target.value;
    setFullName(value);

    if (value.trim() === "") {
      setFullNameError("Full name is required");
    } else if (value.trim().length < 3) {
      setFullNameError("Your name must have at least 3 characters");
    } else {
      setFullNameError("");
    }
  }

  function onemailAddressChange(event) {
    const value = event.target.value;
    setEmailAddress(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === "") {
      setEmailAddressError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailAddressError("Please enter a valid email address");
    } else {
      setEmailAddressError("");
    }
  }

  function onSubjectChange(event) {
    const value = event.target.value;
    setSubject(value);

    if (value.trim() === "") {
      setSubjectError("Your enquiry requires a subject");
    } else if (value.trim().length < 3) {
      setSubjectError("Your subject must be longer than three characters");
    } else {
      setSubjectError("");
    }
  }

  return (
    <div className="container">
      <form onSubmit={onFormSubmit}>
        <h2> Contact us </h2>
        <label htmlFor="full-name"> Full Name </label>
        <input
          value={fullName}
          type="text"
          placeholder="Full name"
          onChange={onNameChange}
        />
        {fullNameError && <p className="errorMessage"> {fullNameError}</p>}
        <label htmlFor="email-address"> Your Email address</label>
        <input
          value={emailAddress}
          placeholder="Email address"
          onChange={onemailAddressChange}
        />
        {emailAddressError && <p class="errorMessage"> {emailAddressError}</p>}
        <label htmlFor="subject"> Subject</label>
        <input
          value={subject}
          placeholder="Subject"
          onChange={onSubjectChange}
        />
        {subjectError && <p class="errorMessage"> {subjectError}</p>}
        <div className="input-box">
          <label> Your inquiry </label>
          <textarea
            name=""
            id="inputBox"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default ContactForm;
