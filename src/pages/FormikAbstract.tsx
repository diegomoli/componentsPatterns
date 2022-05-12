import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos.")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos.")
            .required("Requerido"),
          email: Yup.string()
            .email("No tiene formato válido")
            .required("Requerido"),
          terms: Yup.boolean()
            // .oneOf([true],"Debe aceptar las condiciones"),
            .isTrue("Debe aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Diego"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Molinelli"
            />
            <MyTextInput
              label="Email Adress"
              name="email"
              type="email"
              placeholder="diego@moli.com"
            />
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT-senior</option>
              <option value="it-jr">IT-jr</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Post</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
