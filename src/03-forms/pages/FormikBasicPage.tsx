import {FormikErrors, useFormik} from "formik";
import '../styles/styles.css';

type FormValues = {
  name: string;
  lastname: string;
  email: string;
}
export const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.lastname) {
      errors.lastname = 'Last name is required';
    } else if (values.lastname.length < 2) {
      errors.lastname = 'Last name is too short';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  const {
    values,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    errors
  } = useFormik<FormValues>({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
    }
  });
  return (
    <div>
      <h1>Formik Basic</h1>
      <form noValidate onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}/>
          { touched.name && errors.name && <span>{errors.name}</span>}
        </fieldset>
        <fieldset>
          <label htmlFor="lastname">Last name: </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}/>
          {touched.lastname &&errors.lastname && <span>{errors.lastname}</span>}
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}/>
          {touched.email &&errors.email && <span>{errors.email}</span>}
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
