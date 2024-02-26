import React from 'react';
import {ErrorMessage, Field, useField} from "formik";

type Props = {
  label: string;
  name: string;
  [x: string]: any;
}

export const CheckboxInput = ({ label, ...props }: Props) => {
  const [ field ] = useField({...props, type: 'checkbox'});
  return (
    <fieldset>
      <label htmlFor={props.id ?? props.name}>
        <Field type="checkbox" {...field} {...props} id={props.id ?? props.name} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span"/>
    </fieldset>
  );
};
