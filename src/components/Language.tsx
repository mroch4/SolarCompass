import { Container, Form } from "react-bootstrap";

import { LABELS } from "../common/Labels";
import React from "react";
import { useAppContext } from "../hooks/useAppContext";

const Language = () => {
  const { intl, changeIntl } = useAppContext();

  const isPL = intl === LABELS[0].intl;
  const handleLanguageChange = () => {
    if (isPL) {
      changeIntl(LABELS[1].intl);
    } else {
      changeIntl(LABELS[0].intl);
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" checked={isPL} onChange={handleLanguageChange} label="English" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Language;
