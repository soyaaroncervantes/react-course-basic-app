import {FormEvent} from "react";
import {useForm} from "../hooks/useForm";
import '../styles/styles.css';


type RegisterData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const RegisterPage = () => {
  const { onChange, resetForm, isValidEmail, email,name, password, repeatPassword, formData } = useForm<RegisterData>({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ formData })
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          type="text"
          name="name"
          placeholder="name"
          className={`${ name.trim().length <= 0 && 'has-error' }`}/>
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          onChange={onChange}
          value={email}
          type="email"
          name="email"
          placeholder="email"
          className={`${ !isValidEmail(email) && 'has-error' }`}/>
          {!isValidEmail(email) && <span>Email no es valido</span>}

        <input
          onChange={onChange}
          value={password}
          type="password"
          name="password"
          placeholder="pasword"
          className={`${ password.trim().length <= 0 && 'has-error' }`}/>
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}
        {password !== repeatPassword && repeatPassword.trim().length > 0 && <span>Las contraseñas no coinciden</span>}

        <input
          onChange={onChange}
          value={repeatPassword}
          type="password"
          name="repeatPassword"
          placeholder="repeat password"
          className={`${ repeatPassword.trim().length <= 0 && 'has-error' }`}/>
        {repeatPassword.trim().length <= 0 && <span>Este campo es necesario</span>}
        {repeatPassword.trim().length < 6 && repeatPassword.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}
        <button type="submit">Register</button>
        <button type="reset" onClick={resetForm}>Reset form</button>
      </form>
    </div>
  );
}
export default RegisterPage;
