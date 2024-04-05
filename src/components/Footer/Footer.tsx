import React from "react";
import styles from "./Footer.module.css";
import beginnerImg from "@/public/images/beginner-img.jpeg";
import amateurImg from "@/public/images/amateur-img.jpeg";
import professionalImg from "@/public/images/professional-img.png";
import Image from "next/image";

type Props = {};

const Footer: React.FC<Props> = () => {
	return (
		<>
			<section className={styles.footer}>
				<div className={styles.footerDiv1}>
					<Image
						className={styles.footerBeginnerImg}
						src={beginnerImg}
						alt=""
					/>
					<div className={styles.beginnerDiv}>
						<svg
							className={styles.beginnerSvg}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M431.1 122l70.02-45.91c11.09-7.273 14.19-22.14 6.906-33.25c-7.219-11.07-22.09-14.23-33.22-6.924l-106.4 69.73c-49.81-8.787-97.18-9.669-112.4-9.669c-.002 0 .002 0 0 0C219.5 96 0 100.6 0 208.3v160.1c0 30.27 27.5 57.68 71.1 77.85v-101.9c0-13.27 10.75-24.03 24-24.03s23.1 10.76 23.1 24.03v118.9C153 472.4 191.1 478.3 231.1 480v-103.6c0-13.27 10.75-24.03 24-24.03c.002 0-.002 0 0 0c13.25 0 24 10.76 24 24.03V480c40.93-1.668 78.95-7.615 111.1-16.72v-118.9c0-13.27 10.75-24.03 24-24.03s24 10.76 24 24.03v101.9c44.49-20.17 71.1-47.58 71.1-77.85V208.3C511.1 164.9 476.1 138.4 431.1 122zM255.1 272.5C255.1 272.5 255.1 272.5 255.1 272.5c-114.9 0-207.1-28.97-207.1-64.39s93.12-63.1 207.1-63.1c.002 0-.002 0 0 0c17.5 0 34.47 .7139 50.71 1.966L242.8 187.1c-11.09 7.273-14.19 22.14-6.906 33.25C240.5 228.3 248.2 232.1 256 232.1c4.5 0 9.062-1.265 13.12-3.923l109.3-71.67c51.77 11.65 85.5 30.38 85.5 51.67C463.1 243.6 370.9 272.5 255.1 272.5z" />
						</svg>
						<h4 className={styles.footerH4Beginner}>Beginner</h4>
					</div>
					<div className={styles.footerTextDiv}>
						<h3 className={styles.footerH3}>Beginning</h3>
						<p className={styles.footerP}>
							Its never too late to start as a beginner, with patience and
							perseverance, and the help of our professional instructors
							expertise in helping you to begin your journey.
						</p>
					</div>
					<a href="https://www.youtube.com/watch?v=et9hU7QMDYU" target="_blank">
						<button className={styles.footerBeginnerBtn}>LEARN MORE</button>
					</a>
				</div>
				<div className={styles.footerDiv2}>
					<Image className={styles.footerAmateurImg} src={amateurImg} alt="" />
					<div className={styles.amateurDiv}>
						<svg
							className={styles.amateurSvg}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
						>
							<path d="M288 32C129 32 0 89.25 0 160v192c0 70.75 129 128 288 128s288-57.25 288-128V160C576 89.25 447 32 288 32zM205 190.4c-4.5 16.62-14.5 30.5-28.25 40.5C100.2 217.5 48 190.8 48 160c0-30.12 50.12-56.38 124-69.1l25.62 44.25C207.5 151.4 210.1 171.2 205 190.4zM288 240c-21.12 0-41.38-.1-60.88-2.75C235.1 211.1 259.2 192 288 192s52.88 19.12 60.88 45.25C329.4 239 309.1 240 288 240zM352 96c0 35.25-28.75 64-64 64S224 131.2 224 96V83C244.4 81.12 265.8 80 288 80s43.63 1.125 64 3V96zM398.9 230.9c-13.75-9.875-23.88-23.88-28.38-40.5c-5.125-19.13-2.5-39 7.375-56l25.62-44.5C477.8 103.5 528 129.8 528 160C528 190.9 475.6 217.5 398.9 230.9z" />
						</svg>
						<h4 className={styles.footerH4Amateur}>Amateur</h4>
					</div>
					<div className={styles.footerTextDiv}>
						<h3 className={styles.footerH3}>Learn more</h3>
						<p className={styles.footerP}>
							Ever feel like you haven&apos;t made progress for some time by
							playing as an Amateur? Do not be afraid, book one of our
							instructors to get you back on your feet.
						</p>
					</div>
					<a href="https://www.youtube.com/watch?v=IYu-cxLb1-o" target="_blank">
						<button className={styles.footerAmateurBtn}>LEARN MORE</button>
					</a>
				</div>
				<div className={styles.footerDiv3}>
					<Image
						className={styles.footerProfessionalImg}
						src={professionalImg}
						alt=""
					/>
					<div className={styles.professionalDiv}>
						<svg
							className={styles.professionalSvg}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M502.7 39.02L473 9.37c-12.5-12.5-32.74-12.49-45.24 .0106l-46.24 46.37c-3.875 3.875-6.848 8.506-8.598 13.76l-12.19 36.51L284.5 182.3C272.4 173.5 259 166.5 244.4 163.1C211 155.4 177.4 162.3 154.5 185.1C145.3 194.5 138.3 206 134.3 218.6C128.3 237.1 111.1 251.3 92.14 253C68.52 255.4 46.39 264.5 29.52 281.5c-45.62 45.5-37.38 127.5 18.12 183c55.37 55.38 137.4 63.51 182.9 18c16.1-16.88 26.25-38.85 28.5-62.72c1.75-18.75 15.84-36.16 34.47-42.16c12.5-3.875 24.03-10.87 33.4-20.25c22.87-22.88 29.75-56.38 21.1-89.76c-3.375-14.63-10.39-27.99-19.14-40.11l76.25-76.26l36.53-12.17c5.125-1.75 9.894-4.715 13.77-8.59l46.36-46.29C515.2 71.72 515.2 51.52 502.7 39.02zM208 352c-26.5 0-48-21.5-48-48c0-26.5 21.5-48 48-48s47.1 21.5 47.1 48C256 330.5 234.5 352 208 352z" />
						</svg>
						<h4 className={styles.footerH4Professional}>Professional</h4>
					</div>
					<div className={styles.footerTextDiv}>
						<h3 className={styles.footerH3}>Beyond</h3>
						<p className={styles.footerP}>
							Do not stop even if you think you are good enough, throw whatever
							you have got to our professional instructors, exchange skills and
							knowledge, be even pro-er.
						</p>
					</div>
					<a href="https://www.youtube.com/watch?v=lQzJ5GKpn5I" target="_blank">
						<button className={styles.footerProfessionalBtn}>LEARN MORE</button>
					</a>
				</div>
			</section>
		</>
	);
};

export default Footer;
