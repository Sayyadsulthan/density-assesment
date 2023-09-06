const data = [
  {
    head: "It's not as easy as 1-2-3.",
    body: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    head: "Old habits are hard to break.",
    body: "And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use.",
  },
  {
    head: "You and your motivation don't have a long-term relationship.",
    body: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals..",
  },
  {
    head: "Old habits are hard to break.",
    body: "And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use.",
  },
  {
    head: "Books just don't offer practical solutions.",
    body: "Practical Solutions gives readers, not just a sample but, the essence of applying strategic, Solution-Focused Therapy to resolving “normal problems.”..",
  },
  {
    head: "It's not as easy as 1-2-3.",
    body: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
];

import Image from "next/image";
import styles from "./component5.module.css";
import icon from "../../images/component5Icon.png";
const Component5 = () => {
  return (
    <>
      <div className={styles.cmp5Wrappper}>
        <div className={styles.cmp5Top}>
          <div>Wrong with self-improvement & how we're fixing it.</div>
          <div className={styles.topHead}>
            <h1>Self-improvement. Ugh.</h1>
            <Image style={{ borderRadius: "50%" }} src={icon} alt="avatar" />
          </div>
        </div>
        <div className={styles.cmp5Bottom}>
          <ul>
            {data.map((val) => (
              <li className={styles.list}>
                <h3>{val.head}</h3>
                <p>{val.body}</p>
              </li>
            ))}
          </ul>
          <div className={styles.straitLine}></div>
        </div>
      </div>
    </>
  );
};

export default Component5;
