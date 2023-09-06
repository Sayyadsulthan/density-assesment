import styles from "./component6.module.css";

const Component2 = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.left}>
          {" "}
          <h1>Be the best you with EQ</h1>
        </div>
        <div className={styles.right}>
          <div>
            <p>
              Not having your own emotions under control might be holding you
              back.{" "}
            </p>
          </div>
          <div>
            <p>
              Additionally, not understanding those of others stops you from
              being parent, friend you can be.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component2;
