import "./intro.css";
import { Text } from "../text/text";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver/useIntersectionObeserver";

export const Intro = () => {
  const sectionRef = useRef(null);
  const isVisable = useIntersectionObserver({ sectionRef });

  const visible = isVisable ? "visable" : "invisable";

  return (
    <div id="Intro" className={`Intro ${visible} section`} ref={sectionRef}>
      <Text size="f6">Intro test</Text>
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
