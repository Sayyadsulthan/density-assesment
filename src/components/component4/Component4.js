import Image from "next/image";
import icon from "../../images/component4Icon.png";
import leaficon from "../../images/component4leafIcon.png";
import flowerIcon from "../../images/component4flowerIcon.png";
import flowerIcon2 from "../../images/component4flowerIcon2.png";
import { Paper } from "@mui/material";
import styles from "./component4.module.css";

const Component4 = () => {
  return (
    <>
      <Paper elevation={0}>
        <div className={styles.paperWrapper}>
          <div className={styles.paperLeft}>
            <div className={styles.leftTop}>
              <div>Build out of frustration </div>
              <h1>Meet the ahead app</h1>
            </div>
            <div className={styles.leftBottom}>
              <div className={styles.bigCircle}> </div>
              <div className={styles.bigCircle2}>

              <div className={styles.whiteCircle}></div>
              </div>
              <div className={styles.dotCircleWrapper}>

              <div className={styles.dotCircle}></div>
              </div>
              <Image className={styles.flowerIconLB} src={flowerIcon} alt="flowericon" />
              <Image
              className={styles.avatarIcon}
                style={{ width: "80px", height: 100 }}
                src={icon}
                alt="avataricon"
              />
              <Image className={styles.leafIconLB} src={leaficon} alt="leaficon" />
              <div className={styles.smallCircle}></div>
            </div>
          </div>
          <div className={styles.paperRight}>
            <div className={styles.paperRightcontainer}>
              <Image className={styles.paperRightFlower} src={flowerIcon2} alt="flowericon2" />
              <Image className={styles.paperRightLeaficon} src={leaficon} alt="leaficon" />
              <div>
                <p>
                  A personalized pocket coach that provides bite- sized,
                  science-driven tools to boost emotional intelligence.
                </p>
                <p>
                  Think of it as a pocket cheerleader towards a better, more
                  fulfilling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Component4;
