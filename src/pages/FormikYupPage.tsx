import { useFormik } from "formik";
import * as Yup from "yup";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe de tener 15 caracteres o menos.")
        .required("Requerido"),
      lastName: Yup.string()
        .max(10, "Debe de tener 10 caracteres o menos.")
        .required("Requerido"),
      email: Yup.string()
        .email("No tiene formato válido")
        .required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup</h1>
      <form action="" noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps("lastName")}
          /*getFieldProps reemplaza
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}*/
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Adress</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Post</button>
      </form>
    </div>
  );
};
