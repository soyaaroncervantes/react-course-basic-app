import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {InputType} from "../type/form.type";
import {SelectInput, TextInput} from "../components";

import dataJson from '../data/custom-form.json';

import '../styles/styles.css';

const initialValues: {[key: string]: any} = {}
const requiredFields: {[key: string]: any} = {};

for (const input of dataJson as InputType[]) {
  initialValues[input.name] = input.value ?? '';
  if (!input.validations) continue;
  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(rule.message);
    }

    if (rule.type === 'minLength') {
      schema = schema.min(rule?.value ?? 1, rule.message);
    }

    if (rule.type === 'email') {
      schema = schema.email(rule.message);
    }
  }

  requiredFields[input.name] = schema;
}

const schema = Yup.object({...requiredFields})

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}>
        {(formik) => (
          <Form>
            { dataJson.map(
              ({ name, label, type, placeholder, options, value }) => {
                if (type === 'select') {
                  return (
                    <SelectInput label={label} name={name} key={name}>
                      <option value="">Select an option</option>
                      {
                        options?.map( option => (
                          <option key={option.id} value={option.value}>{option.label}</option>
                        ))
                      }
                    </SelectInput>
                  );
                }

                if (type === 'text' || type === 'email' || type === 'password' || type === 'url'|| type ===  'search') {
                  return <TextInput
                    label={label}
                    name={name}
                    key={name}
                    type={type}
                    placeholder={placeholder} />
                }

                throw new Error(`Unsupported input type: ${type}`);
              })
            }
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default DynamicFormPage;
