import React from "react";
import { useFormContext } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <input
            type="text"
            required={required}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default FormInput;
