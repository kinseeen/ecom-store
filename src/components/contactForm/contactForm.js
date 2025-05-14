import React, { useState, useForm } from "react";
import "../contactForm/contactForm.css";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [isValidName, setValidName] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [isValidSubject, setValidSubject] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const [inquiryError, setInquiryError] = useState("");
  const [isValidInquiry, setValidInquiry] = useState(false);

  function onFormSubmit(event) {
    event.preventDefault();
    console.log({ fullName, emailAddress, subject, inquiry });
    setFullName("");
    setValidName(false);
    setEmailAddress("");
    setValidEmail(false);
    setSubject("");
    setValidSubject(false);
    setInquiry("");
    setValidInquiry(false);
    alert("Thank you for your inqury. Your form has been submitted!");
  }
  function onNameChange(event) {
    const value = event.target.value;
    setFullName(value);
    setValidName(false);

    if (value.trim() === "") {
      setFullNameError("Full name is required");
    } else if (value.trim().length < 3) {
      setFullNameError("Your name must have at least 3 characters");
    } else {
      setFullNameError("");
      setValidName(true);
    }
  }
  function onemailAddressChange(event) {
    const value = event.target.value;
    setEmailAddress(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setValidEmail(false);

    if (value.trim() === "") {
      setEmailAddressError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailAddressError("Please enter a valid email address");
    } else {
      setEmailAddressError("");
      setValidEmail(true);
    }
  }
  function onSubjectChange(event) {
    const value = event.target.value;
    setSubject(value);
    setValidSubject(false);

    if (value.trim() === "") {
      setSubjectError("Your inquiry requires a subject");
    } else if (value.trim().length < 3) {
      setSubjectError("Your subject must be longer than three characters");
    } else {
      setSubjectError("");
      setValidSubject(true);
    }
  }
  function onInquiryChange(event) {
    const value = event.target.value;
    setInquiry(value);
    setValidInquiry(false);

    if (value.trim() === "") {
      setInquiryError("Please write your inquiry");
    } else if (value.trim().length < 3) {
      setInquiryError("Your inquiry needs to be more than three characters");
    } else {
      setInquiryError("");
      setValidInquiry(true);
    }
  }

  return (
    <div className="container">
      <form onSubmit={onFormSubmit}>
        <h2> Contact us </h2>
        <label className="inputDescriptions" htmlFor="full-name">
          {" "}
          Full Name{" "}
        </label>
        <input
          value={fullName}
          type="text"
          placeholder="Full name"
          onChange={onNameChange}
        />
        {fullNameError && <p className="errorMessage"> {fullNameError}</p>}
        <label className="inputDescriptions" htmlFor="email-address">
          {" "}
          Your Email address
        </label>
        <input
          value={emailAddress}
          placeholder="Email address"
          onChange={onemailAddressChange}
        />
        {emailAddressError && (
          <p className="errorMessage"> {emailAddressError}</p>
        )}
        <label className="inputDescriptions" htmlFor="subject">
          {" "}
          Subject
        </label>
        <input
          value={subject}
          placeholder="Subject"
          onChange={onSubjectChange}
        />
        {subjectError && <p className="errorMessage"> {subjectError}</p>}
        <div className="input-box">
          <label> Your inquiry </label>
          <textarea
            value={inquiry}
            name=""
            id="inputBox"
            placeholder="Enter your message"
            required
            onChange={onInquiryChange}
          ></textarea>
          {inquiryError && <p className="errorMessage"> {inquiryError} </p>}
        </div>
        <button
          disabled={
            !isValidEmail || !isValidName || !isValidSubject || !isValidInquiry
          }
          type="submit"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
