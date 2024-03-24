import React from "react";
import Banner from "../../src/assets/app-name.png";

export default function AboutMe() {
  return (
    <div className="about-sec">
      <img className="app-banner" src={Banner} alt="app-banner" />
      <p className="about-para">
        Our listeners do not have formal degrees in psychiatry, psychotherapy or
        social work, but their insights, expertise and empathy might be all you
        need to surmount some personal, financial or career-related problem.
        Equally, those who engage this community as a listener know the reward
        of offering their own victories and acquired life-wisdom to a
        fellow-traveller.<br></br>
        <br></br>Imagine our online environment like a park. As you meander its
        walkways, there's a pavilion lined with perimeter bench seating, enough
        to host a conversation circle on a variety of topics. You can always
        listen to (view) these conversations, but if you wish to make comments
        or start a conversation, you will need to log in. On first login you'll
        sign up as either a listener or a sharer. You'll keep this role and your
        username as your screen name throughout your time at Soul Bench. Once
        logged in, you can claim your own bench, where listener and sharer meet
        one on one. You are limited to one private conversation at a time.
        Sharers initiate the private conversations and are usually the ones to
        close them. Listeners commit to check the forum at least twice a day.
        <br></br>
        <br></br>For many, life is not a walk in the park! Our goal at Soul
        Bench is to democratize wisdom and to lessen an overwhelmed person's
        sense that they are completely alone. We believe it is within everyone's
        grasp to flourish within their circumstances. Sometimes it takes a
        little support.
      </p>
    </div>
  );
}
