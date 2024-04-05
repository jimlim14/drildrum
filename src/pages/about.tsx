import { NextPage } from "next";
import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import { instagramIcon, facebookIcon } from "@/public/images/";

const About: NextPage = () => {
	return (
		<div className={styles.aboutWrapper}>
			<section className={styles.about}>
				<h1 className={styles.aboutHeader}>
					We are <span className={styles.aboutHeaderSpan}>DrilDrum</span>
				</h1>
				<p className={styles.aboutDescription}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<div className={styles.aboutLogoDiv}>
					<Image
						className={styles.socialMediaLogo}
						src={instagramIcon}
						alt=""
						width={40}
					/>
					<Image
						className={styles.socialMediaLogo}
						src={facebookIcon}
						alt=""
						width={40}
					/>
				</div>
			</section>
		</div>
	);
};

export default About;
