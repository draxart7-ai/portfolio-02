import "./preview.css";
import { Button } from "../button/button";
import { Card } from "../card/card";
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
        <div className="SectionCards">
          <Card>
            <h1> Title</h1>
            <div> Content</div>
          </Card>
          <Card>
            <h1> Title 2</h1>
            <div> Content</div>
          </Card>
          <Card>
            <h1> Title3</h1>
            <div> Content</div>
          </Card>
        </div>
      </div>
    </div>
  );
};
