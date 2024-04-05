import { NextPage } from "next";
import { useState, useEffect } from "react";
import Instructor from "@/components/Instructor/Instructor";
import styles from "./Instructors..module.css";

import {
	jaredFalkImg,
	robBourdonImg,
	treCoolImg,
	tonyRoysterJrImg,
	chadSmithImg,
} from "@/public/images";
import { IInstructors } from "@/interfaces";

const images = [
	jaredFalkImg,
	robBourdonImg,
	treCoolImg,
	tonyRoysterJrImg,
	chadSmithImg,
];

const Instructors: NextPage = () => {
	const [instructorsList, setInstructorsList] = useState<IInstructors[]>([]);

	useEffect(() => {
		fetch("api/instructors")
			.then((res) => res.json())
			.then((instructors) => {
				setInstructorsList(instructors);
			});
	}, []);

	return (
		<>
			{instructorsList.length && (
				<section id="instructors">
					{instructorsList.map((instructor, index) => (
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
			)}
		</>
	);
};

export default Instructors;
