import "./skills.css";
import { Text } from "../text/text";
import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver/useIntersectionObeserver";
import { useActiveElementContext } from "../../state/active-element/active-element-context";

export const Skills = () => {
  const sectionRef = useRef(null);
  const isVisable = useIntersectionObserver({ sectionRef });
  const { register } = useActiveElementContext();

  const visible = isVisable ? "visable" : "invisable";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister; // Cleanup on unmount
  }, [register]);

  return (
    <div id="Skills" className={`Skills ${visible} section`} ref={sectionRef}>
      <Text size="f6">Skills</Text>
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
