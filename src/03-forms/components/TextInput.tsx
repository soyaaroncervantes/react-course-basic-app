import React from 'react';
import {ErrorMessage, Field, useField} from "formik";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'url' | 'search';
  [x: string]: any;
}

export const TextInput = ({ label, ...props }: Props) => {
  const [ field] = useField(props);
  return (
    <fieldset>
      <label htmlFor={props.id ?? props.name}>{label}</label>
      <Field className="" {...field} {...props} id={props.id ?? props.name} />
      <ErrorMessage name={props.name} component="span"/>
    </fieldset>
  );
};
