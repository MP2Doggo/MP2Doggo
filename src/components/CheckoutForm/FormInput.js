import React from "react";
import { FormText, Col } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Col item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <FormText
            fullWidth
            label={label}
            required={required}
            onChange={onChange}
            sx={{ fontFamily: "Crimson Text" }}
            color="primary"
          />
        )}
      />
    </Col>
  );
};

export default FormInput;