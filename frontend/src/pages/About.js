import React from "react";
import patternBkg from "../assets/gym-pattern.png";

export default function About() {
  return (
    <>
      <div className="about--container">
        <h1>About</h1>
        <p>🏋️‍♂️ Workout Mate is here for you to keep track of your physical activity.</p>
        <p>
          📝{" "}
          {`You will be able to submit exercises whenever you want — and without any real-life relevance if that's what you prefer.`}
        </p>
        <p>🧘‍♀️ Workout Mate doesn't judge.</p>
        <p>
          🚴‍♂️ Workout Mate lets you be the athlete <i>you</i> want to be.
        </p>
        <p>
          ⚠️ <b>Please note</b> that accounts and posts are limited in quantity and
          will eventually be deleted (oldest first) if the set limit is crossed.
        </p>
        <p>
          📉{" "}
          {`Although this app doesn't expect nearly enough traffic to prevent you
          from trying out all the functionality that it has to offer, you
          shouldn't expect to be able to access your account a month 📆 or a week 🕒
          after you created it.`}
        </p>
      </div>
      <img
        className="about--gym--pattern--bkg"
        src={patternBkg}
        alt="Sports and healthy lifestyle symbols pattern"
      />
    </>
  );
}
