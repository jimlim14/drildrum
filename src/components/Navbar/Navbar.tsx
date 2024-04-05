import React from 'react';
import logo from '@/public/images/drildrum.png';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Navbar: React.FC<Props> = () => {
	return (
		<section className={styles.navbar}>
			<div className={styles.navbarLeft}>
				<Link href='/'>
					<Image src={logo} className={styles.logo} alt='asdf' height={80} width={80} />
				</Link>
			</div>

			<div className={styles.navbarRight}>
				<div>
					<Link href='/instructors' className={styles.navbarRightLink}>
						<p>Instructors</p>
					</Link>
				</div>
				<div>
					<Link href='/about' className={styles.navbarRightLink}>
						<p>About</p>
					</Link>
				</div>
				<div>
					<Link href='/book' className={styles.navbarRightLink}>
						<p>Book</p>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Navbar;
