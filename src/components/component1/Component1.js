import Image from "next/image";
import component1 from "../../images/component1.png";

const Component1 = () => {
  return (
    <>
      {/* <h1>Component1</h1> */}
      <Image style={{ width: "100%" }} src={component1} alt="component1" />
    </>
  );
};

export default Component1;
