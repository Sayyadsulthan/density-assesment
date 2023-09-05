import styles from "./component2.module.css";

const Component2 = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.left}>
          {" "}
          <h1>EQ beats IQ</h1>
        </div>
        <div className={styles.right}>
          <div>
            <p>
              People with high emotional intelligence (EQ) live more fulfilled
              lives. They tend to be happier and have healthier relationships.{" "}
            </p>
          </div>
          <div>
            <p>
              They are more successfull in their pursuits and make for inspiring
              leaders. According to science, they earn $29k a year.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component2;
