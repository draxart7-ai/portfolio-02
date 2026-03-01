import "./about.css";
import { Text } from "../text/text";

export const About = () => {
  return (
    <div id="About" className={`About`}>
      <img src="/images/misc/alan-01.jpg" alt="profile" height="300px" />
      {/* <div className="title"> Hello, I am </div>
      <h1 className="name"> Alan Curtis </h1>
      <h2 className="subtitle">Web Developer | Technical Artist</h2>
      <p className="info">
        I love board games, video games, hiking, playing sports, my family and
        life in general. I am an upbeat optimist that enjoys a good challenge.
        With being well organized I feel like a day of planning saves a week of
        coding. I approach all my tasks with clarity and a well thought out
        approach. With a strong ability to foresee issues before they arise. I
        build stable, versatile and tested code.
      </p> */}

      <Text size="f6">Alan Curtis</Text>
      <Text isSubtle size="f6">
        Alan Curtis
      </Text>
      <Text size="f5">Alan Curtis</Text>
      <Text size="f5" isSubtle>
        Alan Curtis
      </Text>
      <Text size="f4">Alan Curtis</Text>
      <Text size="f4" isSubtle>
        Alan Curtis
      </Text>
      <Text size="f3">Alan Curtis</Text>
      <Text size="f3" isSubtle>
        Alan Curtis
      </Text>
      <Text size="f2">Alan Curtis</Text>
      <Text size="f2" isSubtle>
        Alan Curtis
      </Text>
      <Text size="f1">Alan Curtis</Text>
      <Text size="f1" isSubtle>
        Alan Curtis
      </Text>
    </div>
  );
};
