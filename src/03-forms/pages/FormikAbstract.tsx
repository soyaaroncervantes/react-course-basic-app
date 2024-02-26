import {Form, Formik,} from "formik";
import * as Yup from "yup";
import {TextInput, SelectInput, CheckboxInput} from "../components";
import '../styles/styles.css';

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={
          (values) => {
            console.log(values)
          }
        }
        validationSchema={
          Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastname: Yup.string()
              .min(2, 'Must be 2 characters or more')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            terms: Yup.boolean()
              .oneOf([true], 'You must accept our terms and conditions'),
            jobType: Yup.string()
              .notOneOf(['disabled'], 'This options is not available')
              .required('Required')
          })
        }>
        {
          () => (
            <Form noValidate>
              <TextInput name="name" label="Name"/>
              <TextInput name="lastname" label="Last name"/>
              <TextInput name="email" label="Email" type="email"/>
              <SelectInput name="jobType" label="Job Type">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="architect">Architect</option>
                <option value="disabled">Disabled option</option>
              </SelectInput>
              <CheckboxInput label='Terms & conditions' name="terms"/>
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default FormikAbstract;
