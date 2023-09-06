const { Stepper, Paper, Step, StepLabel } = require("@mui/material");
import flower1 from "../../images/component4flowerIcon.png";
import styles from "./component7.module.css";

const steps = [
  "Answer questions on your social skills",
  "Let others anonymously answer the same questions about you",
  "Find out where you and others see things the same way - and where not!",
];
const steps2 = [
  "You",
  "Anonymonos 1 Anonymonos",
  "Anonymonos 2",
  "Anonymonos 3",
];
const Component7 = () => {
  return (
    <>
      <Paper className={styles.cmp7Wrapper} elevation={0}>
        <div className={styles.cmp7Top}>
          <div className={styles.smallFont}>
            Let your friends, family, and co-workers (anonymously) rate your
            social skills.
          </div>
          <div className={styles.largeFont}>
            Ever wondered what others think of you?
          </div>
        </div>
        <div className={styles.cmp7Bottom}>
          <Stepper alternativeLabel activeStep={1}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Paper style={{width:"60%", margin:"auto"}} elevation={3}>
            <Stepper alternativeLabel activeStep={1}>
              {steps2.map((label) => (
                <Step key={label} >
                  <StepLabel className={styles.childBox}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </div>
      </Paper>
    </>
  );
};

export default Component7;
