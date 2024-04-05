import React from 'react';
import styles from './UpperBody.module.css';

import { handleGetStarted } from '../../utils/helper';

type Props = {};

const UpperBody: React.FC<Props> = () => {
  return (
    <>
      <section className={styles.upperBody}>
        <div className={styles.upperBodyTextDiv}>
          <h1 className={styles.upperBodyH1}>
            Learn to play drums no matter what levels you are in.
          </h1>
          <p className={styles.upperBodyP}>
            Beginners, Amateurs, Professional. Follow your own pace, pick an
            instructor that suits you best.
          </p>
          <button className={styles.upperBodyBtn} onClick={handleGetStarted}>
            Get started
          </button>
        </div>
      </section>
    </>
  );
}

export default UpperBody;
