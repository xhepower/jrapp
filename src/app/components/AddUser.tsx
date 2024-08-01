"use client";
import { useState } from "react";
import { iUser, Role, iSaveUser } from "../utils/IData";
import {
  Formik,
  Field,
  ErrorMessage,
  Form,
  FormikHelpers,
  FormikValues,
} from "formik";
import * as Yup from "yup";
import { saveUser as guardar } from "../actions";
interface AddUserProps {
  setIsAdding: Function;
}
const roleValues: Role[] = Object.values(Role) as Role[];
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  role: Yup.mixed<Role>()
    .oneOf(roleValues, "Invalid role")
    .required("Role is required"),
});

function AddUser(props: AddUserProps) {
  const setIsAdding = props.setIsAdding;
  const initialValues: iSaveUser = {
    name: "",
    email: "",
    password: "",
    role: roleValues[0] || Role.USER,
  };
  const handleSubmit = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<iSaveUser>
  ) => {
    setTimeout(() => {
      const { name, email, password, role } = values;
      console.log({ name, email, password, role });
      try {
        guardar({ name, email, password, role });
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
        setIsAdding(false);
      }
    }, 500);
  };
  return (
    <div>
      <button
        onClick={() => {
          setIsAdding(false);
        }}
      >
        Volver
      </button>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name:
              <Field
                name="name"
                type="text"
                className={errors.name ? "error" : ""}
              />
              <ErrorMessage className="error" name="name" component="div" />
            </label>
            <label htmlFor="email">
              Email:
              <Field
                name="email"
                type="email"
                className={errors.email ? "error" : ""}
              />
              <ErrorMessage className="error" name="email" component="div" />
            </label>

            <label htmlFor="password">
              Password:
              <Field
                name="password"
                type="password"
                className={errors.password ? "error" : ""}
              />
              <ErrorMessage className="error" name="password" component="div" />
            </label>

            <label htmlFor="role">
              Role:
              <Field as="select" id="role" name="role">
                {roleValues
                  .filter((role) => isNaN(Number(Object.values(role))))
                  .map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
              </Field>
              <ErrorMessage className="error" name="error" component="div" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddUser;
