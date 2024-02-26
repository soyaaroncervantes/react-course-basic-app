import {Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import '../styles/styles.css';
import {TextInput} from "../components";

const YupTyped = <T,>(obj: Record<keyof T, Yup.AnySchema>) => Yup.object().shape<typeof obj>(obj);
type RegisterData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const RegisterPage = () => {

// define schema
  const schema = YupTyped<RegisterData>({
    name: Yup
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(15, 'Name must be at most 15 characters')
      .required('Name is required'),
    email: Yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    repeatPassword: Yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
      .oneOf([
        Yup.ref('password')
      ], 'Passwords must match')
  })
  const onSubmit = (data: RegisterData, helpers: FormikHelpers<RegisterData>) => {
    console.log({data, helpers})
  }
  const initialValues: RegisterData = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  }

  return (
    <div>
      <h1>Register Formik</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}>
        {
          ({ handleReset }) => (
            <Form noValidate>
              <TextInput label="Name" name='name' />
              <TextInput label="Email" name='email' type='email' />
              <TextInput label="Password" name='password' type='password' />
              <TextInput label="Confirm password" name='repeatPassword' type='password' />
              <button type="submit">Register</button>
              <button type="reset">Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}
export default RegisterPage;
