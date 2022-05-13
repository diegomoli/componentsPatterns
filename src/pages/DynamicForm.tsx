import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  //Capturamos el valor inicial y creamos nuestro objeto
  initialValues[input.name] = input.value;

  //Si no tiene validaciones entonces se sale
  if (!input.validations) continue;

  //Creamos un esquema para cada uno de los campos
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLenght") {
      schema = schema.min(
        (rule as any).value || 2,
        `Debe tener mas de ${(rule as any).value || 2} caracteres.`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("No tiene un formato correcto");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });
export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {formJson.map(({ label, name, placeholder, type, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type as any}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`El type ${type}, no es soportado`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
