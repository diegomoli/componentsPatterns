import { useForms } from "../hooks/useForms";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    email,
    name,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForms({
    email: "",
    name: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form action="" noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Campo Obligatorio</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
          className={`${password1.trim().length <= 0 && "has-error"}`}
        />
        {password1.trim().length <= 0 && <span>Campo Obligatorio</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
          className={`${password2.trim().length <= 0 && "has-error"}`}
        />
        {password2.trim().length <= 0 && <span>Campo Obligatorio</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>La contraseñas deben ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
