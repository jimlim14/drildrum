import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Instructor from '../Instructor/Instructor';
import './instructors.css';

import jaredFalk from '../../images/jared-falk.jpeg';
import robBourdon from '../../images/rob-bourdon.webp';
import treCool from '../../images/tre-cool.jpg';
import tonyRoysterJr from '../../images/toy-royster-jr.jpg';
import chadSmith from '../../images/chad-smith.jpeg';

const images = [jaredFalk, robBourdon, treCool, tonyRoysterJr, chadSmith];

export default function Instructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/instructors')
      .then((res) => res.json())
      .then((instructors) => {
        setInstructors(instructors);
      });
  }, []);

  return (
    instructors.length && (
      <>
        <Navbar />
        <section id='instructors'>
          {instructors.map((instructor, index) => (
            <Instructor
              image={images[index]}
              key={instructor._id}
              name={instructor.name}
              experience={instructor.experience}
              description={instructor.description}
              quote={instructor.quote}
              categories={instructor.category}
            />
          ))}
        </section>
      </>
    )
  );
}
