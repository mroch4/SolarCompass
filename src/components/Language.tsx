import React, { useState } from "react";

import { Form } from "react-bootstrap";
import LABELS from "../labels/Labels";
import { initialIntl } from "../contexts/Context";
import useAppContext from "../hooks/useAppContext";

const Language = () => {
  const { changeIntl } = useAppContext();

  const [currentINTL, setcurrentIntl] = useState<string>(initialIntl);

  const handleChange = (intl: string) => {
    changeIntl(intl);
    setcurrentIntl(intl);
  };

  const languages = LABELS.map((item) => item.intl);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <span className="d-flex mx-2">
        <img src="icons/globe.svg" width="20" alt="Location icon" />
      </span>
      <Form.Select value={currentINTL} onChange={(e) => handleChange(e.currentTarget.value)}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.split("-")[1]}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default Language;
