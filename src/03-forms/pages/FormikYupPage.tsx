import {useFormik} from "formik";
import * as Yup from "yup";
import '../styles/styles.css';

type FormValues = {
  name: string;
  lastname: string;
  email: string;
}
export const FormikYupPage = () => {

  const {
    touched,
    getFieldProps,
    handleSubmit,
    errors
  } = useFormik<FormValues>({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: Yup.object<FormValues>({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastname: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required')
    })
  });
  return (
    <div>
      <h1>Formik Yup Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" {...getFieldProps('name')}/>
          {touched.name && errors.name && <span>{errors.name}</span>}
        </fieldset>
        <fieldset>
          <label htmlFor="lastname">Last name: </label>
          <input type="text" id="lastname" {...getFieldProps('lastname')}/>
          {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" {...getFieldProps('email')}/>
          {touched.email && errors.email && <span>{errors.email}</span>}
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
