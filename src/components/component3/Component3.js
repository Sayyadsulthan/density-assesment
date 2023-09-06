import Image from "next/image";
import icon from "../../images/component3icon.png";
import angryIcon from "../../images/component3emojiAngry.jpg";
import styles from "./component3.module.css";
import { Card } from "@mui/material";

const Component3 = () => {
  return (
    <>
      <div className={styles.component3Wrapper}>
        <div className={styles.top}>
          <h1>Deos this sound familiar... </h1>
          <Image src={icon} alt="" />
        </div>
        <div className={styles.bottom}>
          <Card
            style={{ backgroundColor: "#d8f2ff" }}
            className={styles.cardContainer}
            variant="outlined"
          >
            <div className={styles.cardbodytop}>
              <Image
                // style={{ }}
                // className={styles.emoji}
                style={Style.emoji}
                src={angryIcon}
                alt="logo or emoji"
              />
            </div>
            <div className={styles.cardbodyBottom}>
              <h3>You argue with a college</h3>
              <p>
                You get angry and defensive, instead of staying open working
                towards common ground.
              </p>
            </div>
          </Card>
          <Card
            style={{ backgroundColor: "#eeebfe" }}
            className={styles.cardContainer}
            variant="outlined"
          >
            <div className={styles.cardbodytop}>
              <Image
                // style={{ width: 100, height: 100 }}
                style={Style.emoji}
                className={styles.emoji}
                src={angryIcon}
                alt="logo or emoji"
              />
            </div>
            <div className={styles.cardbodyBottom}>
              <h3>You argue with a college</h3>
              <p>
                You get angry and defensive, instead of staying open working
                towards common ground.
              </p>
            </div>
          </Card>
          <Card
            style={{ backgroundColor: "#6341ef" }}
            className={styles.cardContainer}
            variant="outlined"
          >
            <div className={styles.cardbodytop}>
              <Image
                // style={{ width: 100, height: 100 }}
                style={Style.emoji}
                className={styles.emoji}
                src={angryIcon}
                alt="logo or emoji"
              />
            </div>
            <div className={styles.cardbodyBottom}>
              <h3>You argue with a college</h3>
              <p>
                You get angry and defensive, instead of staying open working
                towards common ground.
              </p>
            </div>
          </Card>
          <Card
            style={{ backgroundColor: "#ffefd5" }}
            className={styles.cardContainer}
            variant="outlined"
          >
            <div className={styles.cardbodytop}>
              <Image
                // style={{ width: 100, height: 100 }}
                style={Style.emoji}
                className={styles.emoji}
                src={angryIcon}
                alt="logo or emoji"
              />
            </div>
            <div className={styles.cardbodyBottom}>
              <h3>You argue with a college</h3>
              <p>
                You get angry and defensive, instead of staying open working
                towards common ground.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Component3;

const Style = {
  emoji: {
    borderRadius: "50%",
    width: 80,
    height: 80,
    padding: "10px",
  },
};
