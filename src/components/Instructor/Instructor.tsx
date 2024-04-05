import React from "react";
import styles from "./Instructor.module.css";

type Props = {
	image: any;
	name: any;
	experience: any;
	description: any;
	quote: any;
	categories: any;
};

const Instructor: React.FC<Props> = ({
	image,
	name,
	experience,
	description,
	quote,
	categories,
}) => {
	return (
		<div className={styles.instructor}>
			<img className={styles.instructorImg} src={image} alt="" />
			<div className={styles.instructorDetails}>
				<div className={styles.instructorHeader}>
					<h1 className={styles.instructorName}>{name} </h1>
					<h3 className={styles.instructorQuote}>&quot;{quote}&quot;</h3>
				</div>
				<div>
					<h2 className={styles.instructorExperience}>
						teaching experience: {experience}
					</h2>
					<p className={styles.categoryP}>
						{categories.map((category) => {
							return category + "  ";
						})}
					</p>
				</div>
				<p className={styles.instructorDescription}>{description}</p>
			</div>
		</div>
	);
};

export default Instructor;