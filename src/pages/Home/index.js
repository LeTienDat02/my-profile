import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {

  const [job, setJob] = useState('Web Developer.')

  useEffect(() => {
    setTimeout(() => {
      (job === 'Web Developer.') ? setJob('Data Analytics') : setJob('Web Developer.')
    },2000)
  },[job])
  return (
    <div className={cx("home-content")}>
      <div className={cx("img-backgound")}></div>
      <div className={cx("my-name")}>
        <h4>
          <span>Dat </span>Tien Le
        </h4>
        <p>
          <span>I Am A </span>{job}
        </p>
      </div>
    </div>
  );
}

export default Home;
