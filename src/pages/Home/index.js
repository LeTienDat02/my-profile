import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("home-content")}>
      <div className={cx("img-backgound")}></div>
      <div className={cx("my-name")}>
        <h4>
          <span>Dat </span>Tien Le
        </h4>
        <p>
          <span>I Am A </span>Web Developer.
        </p>
      </div>
    </div>
  );
}

export default Home;
