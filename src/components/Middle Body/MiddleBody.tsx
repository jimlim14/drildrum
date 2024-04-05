import React from "react";
import styles from "./MiddleBody.module.css";

type Props = {};

const MiddleBody: React.FC<Props> = () => {
	return (
		<section className={styles.middleBody}>
			<h4 className={styles.middleBodyH3}>
				<em>
					&quot;DrilDrum is the real deal folks - a nice booking platform to
					find the best instructros.&quot;
				</em>
			</h4>
			<p className={styles.middleBodyP}>Omar Zubaidi - Dark Mode 101 instructor</p>

			<h4 className={styles.middleBodyH3}>
				<em>
					&quot;DrilDrum has made me become zero to hero, cannot wait to share
					experience as an instructor myself.&quot;
				</em>
			</h4>
			<p className={styles.middleBodyP}>Wei Lin - the durian lover</p>

			<h4 className={styles.middleBodyH3}>
				<em>&quot;I was just gonna quickly ask... never mind.&quot;</em>
			</h4>
			<p className={styles.middleBodyP}>Kachi - The pun guy</p>
		</section>
	);
};

export default MiddleBody;
