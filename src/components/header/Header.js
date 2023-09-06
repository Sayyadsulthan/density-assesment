import { Paper } from "@mui/material";
import styles from "./header.module.css";
import navlogo from "../../images/navlogo.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className={styles.mainHeader}>
        <Paper elevation={0} className={styles.wrapper}>
          {/* <div className="HeadWrapper"> */}
          <div className={styles.left}>
            <Image
              height={100}
              width={100}
              role="img"
              // src="C:\Users\Dell\Downloads\nav_icon.png"
              src={navlogo}
              alt="nav_icon"
            />
          </div>
          <div className={styles.center}>
            <div>Emotions</div>
            <div>Manifesto</div>
            <div>Self-awarness test</div>
            <div>Work with us</div>
          </div>
          <div className={styles.right}>
            <button>Download app</button>
          </div>
          {/* </div> */}
        </Paper>
      </div>
    </>
  );
};
export default Header;
