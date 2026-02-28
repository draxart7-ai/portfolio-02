import "./preview.css";
import { Button } from "../button/button";
export const Preview = () => {
  return (
    <div className="Preview">
      <div className="Header"> Preview Page </div>
      <div className="LeftRail"> Left Rail</div>
      <div className="Content">
        <div className="SectionButtons">
          <Button
            variant="action"
            title="Action"
            onClick={() => {
              console.log("Action");
            }}
          />
          <Button title="Default" />
          <Button title="Disabled" disabled />
        </div>
      </div>
    </div>
  );
};
