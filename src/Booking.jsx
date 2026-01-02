import React, { useState } from "react";
import { supabase } from "./supabase.js";
import "./Booking.css";

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!fullName || !email || !trainerName || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase.from("bookings").insert([
      {
        full_name: fullName,
        email: email,
        trainer_name: trainerName,
        date: date,
        time: time,
      },
    ]);

    if (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Please try again.");
    } else {
      setSubmitted(true);

      // reset form (optional)
      setFullName("");
      setEmail("");
      setTrainerName("");
      setDate("");
      setTime("");
    }
  };

  const handleBookAnother = () => {
    setSubmitted(false);
  };

  return (
    <div id="booking" className="booking">
      <h1>Book a Training Session</h1>

      {submitted ? (
        <div className="confirmation">
          <h2>Thank you!</h2>
          <p>Your booking has been confirmed.</p>
          <button className="book-again" onClick={handleBookAnother}>
            Book Another Session
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
            required
          >
            <option value="">Select Trainer</option>
            <option value="Frank Zane">Frank Zane</option>
            <option value="Mike Davis">Mike Davis</option>
            <option value="Emily Chen">Emily Chen</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <button type="submit">Confirm Booking</button>
        </form>
      )}
    </div>
  );
}

export default Booking;
