import "./form.css";
import { Card } from "../../../card/card";
import { useState } from "react";
import { ButtonBasic } from "../../../button-basic/button-basic";
export const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="Form">
      <Card>
        <div className="name">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="message">
          <label>Message</label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="actions">
          <ButtonBasic label="Send Email" />
        </div>
      </Card>
    </div>
  );
};
