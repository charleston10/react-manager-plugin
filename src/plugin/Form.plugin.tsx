import React, { ReactElement, useState } from "react";
import { AppPlugin } from "./api/AppPlugin";

export const FormPlugin = (): AppPlugin => {
  const Component = (): ReactElement => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const validateAndSubmit = (): void => {
      if (parseInt(age) >= 18) {
        alert("Maior de idade");
      } else {
        alert("Menor de idade");
      }
    };

    return (
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Gender:{" "}
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <label>
          Age:{" "}
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button onClick={validateAndSubmit}>Submit</button>
      </div>
    );
  };

  return {
    name: "Plugin Form Embbeded",
    component: Component,
  };
};
