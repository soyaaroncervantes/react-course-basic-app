import React from 'react';
import {ErrorMessage, Field, useField} from "formik";

type Props = {
  label: string;
  name: string;
  [x: string]: any;
}

export const SelectInput = ({ label, ...props }: Props) => {
  const [ field ] = useField(props);
  return (
    <fieldset>
      <label htmlFor={props.id ?? props.name}>{label}</label>
      <select {...field} {...props} id={props.id ?? props.name} />
      <ErrorMessage name={props.name} component="span"/>
    </fieldset>
  );
};
