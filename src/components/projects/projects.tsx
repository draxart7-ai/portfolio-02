import "./projects.css";
import { Text } from "../text/text";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver/useIntersectionObeserver";

export const Projects = () => {
  const sectionRef = useRef(null);
  const isVisable = useIntersectionObserver({ sectionRef });

  const visible = isVisable ? "visable" : "invisable";

  return (
    <div
      id="Projects"
      className={`Projects ${visible} section`}
      ref={sectionRef}
    >
      <Text size="f6">Projects</Text>
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
