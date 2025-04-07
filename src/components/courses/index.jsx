"use client";

import { useEffect } from "react";

import Section from "./Section";

import { scrollAnimations } from "./utils/smoothScroll";

const sections = [
  {
    course: "Business",
    video: "business",
    title: (
      <>
        Crafting Your Path <br /> to Business Success
      </>
    ),
    text: (
      <>
        <i>
          <span>Where innovation </span>
        </i>
        <span>Meets Opportunity</span>
      </>
    ),
    testimonials: [
      {
        name: "Armig Panossian-Ghazarian",
        text: "Innovative idea, organized staff, coordinated program. My 15-year-old son has been attending with great pleasure for 4 months now and is trying to apply what he has learned.",
      },
      {
        name: "Seda Miroyan",
        text: "A school where they teach new skills, new knowledge, new approaches, and approach each student in their own way. A place where knowledgeable professionals work, sparing no effort to transfer their knowledge to their students. And, the visits to various institutions outside of and within the lessons are, without a doubt, conducted at a high level. Thank you, everyone.",
      },
      {
        name: "Vardan Hovhannisyan",
        text: "By mastering the material provided at school, the student forms a general idea of ​​the financial and banking system, the steps necessary to conduct business, and is also provided with a lot of other important and practical information. The initiative is up-to-date and definitely welcome.",
      },
    ],
  },
  {
    course: "Rights",
    video: "rights",
    title: (
      <>
        Your Legal Path <br /> Begins Now
      </>
    ),
    text: (
      <>
        <i>
          <span>Where Justice </span>
        </i>
        <span>Meets Expertise</span>
      </>
    ),
    testimonials: [
      {
        name: "Alla Grigoryan",
        text: "I definitely recommend attending Kidpreneurs School. In a short time, they teach skills that cannot be learned in school, on the street, or at home. Children gain financial knowledge from a young age, learn to work as a team, and know many secrets to achieving success.",
      },
      {
        name: "Dzovig Gulumian",
        text: "I am continually impressed by this school.From the earliest age the school encourages the kids to take on public speaking roles but always in a nurturing environment that allows them to develop confidence in their own abilities.A big thanks to all the teachers for their patience and the knowledge.",
      },
      {
        name: "Vania Movsessian",
        text: "We really appreciate the work that Kidspreneurs business school has done towards improving our daughter’s mindset, making her learn everything that they don’t teach in regular schools. Besides teaching business they also taught her about  the values that every person must have ,self confidence, time management. My daughter is learning in this school for more than 2 years and the result is so obvious she became more responsible, she is able to think outside of the box, she manages her time, she started her own project…",
      },
    ],
  },
  {
    course: "Marketing",
    video: "marketing",
    color: "#fcf8de",
    title: (
      <>
        Master Marketing <br /> Elevate Your Brand
      </>
    ),
    text: (
      <>
        <i>
          <span>Where Creativity </span>
        </i>
        <span>Drives Results</span>
      </>
    ),
    testimonials: [
      {
        name: "Hovhannes Xacheryan",
        text: "I would like to thank the best teachers at Kidpreneurs School for the interesting courses, thematic gatherings and good environment. Everything starts with education",
      },
      {
        name: "Lusine Arshakyan",
        text: "I definitely recommend everyone to visit this wonderful school, where they will not only receive financial literacy, but also become more flexible in their thinking on any issue, get acquainted with the activities of large organizations, and participate in very interesting courses. Thank you to the school",
      },
      {
        name: "Elya Khachatryan",
        text: "It is a very high-quality school that, in addition to business, provides children with many other knowledge to develop in line with the modern world. Highly recommended!",
      },
    ],
  },
];

export default function Index() {
  useEffect(() => {
    scrollAnimations();
  }, []);

  return (
    <div className="courses">
      <div className=""></div>
      <div className="">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  );
}
