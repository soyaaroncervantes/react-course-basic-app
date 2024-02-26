import {ErrorMessage, Field, Form, Formik,} from "formik";
import * as Yup from "yup";
import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Component</h1>
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
              <fieldset>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" id="name"/>
                <ErrorMessage name="name" component="span"/>
              </fieldset>
              <fieldset>
                <label htmlFor="lastname">Last name</label>
                <Field name="lastname" type="text" id="lastname"/>
                <ErrorMessage name="lastname" component="span"/>
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" id="email"/>
                <ErrorMessage name="email" component="span"/>
              </fieldset>

              <fieldset>
                <label htmlFor="jobType">Job Type</label>
                <Field name="jobType" id="jobType" as="select">
                  <option value="">Pick something</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="architect">Architect</option>
                  <option value="disabled">Disabled option</option>
                </Field>
                <ErrorMessage name="jobType" component="span"/>
              </fieldset>


              <fieldset>
                <label htmlFor="terms">
                  <Field name="terms" type="checkbox" id="terms"/>
                  Terms and conditions
                </label>
                <ErrorMessage name="terms" component="span"/>
              </fieldset>
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default FormikComponents;
