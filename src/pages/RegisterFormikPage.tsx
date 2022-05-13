import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Mínimo dos caracteres")
            .max(15, "Máximo 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("No tiene formato válido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Debe tener 6 caracteres mínimo")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
          // .equals(password1, "El password no coincide"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Nombre" />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <MyTextInput
              label="Password"
              name="password1"
              placeholder="******"
              type="password"
            />
            <MyTextInput
              label="Password"
              name="password2"
              placeholder="******"
              type="password"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
