import { Formik, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const onSubmit = (values) => console.log(values);

const initialValues = {
  email: "",
  bio: "",
  course: "",
  skillset: [],
  courseDate: null,
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid Email Format"),
  bio: Yup.string().required("Required"),
  course: Yup.string().required("No Course Selected"),
  skillset: Yup.array().required("Required"),
  courseDate: Yup.date().required("Required").nullable(),
});

const courseOptions = [
  { key: "Select a course", value: "", id: uuidv4() },
  { key: "frontend", value: "frontend", id: uuidv4() },
  { key: "backend", value: "backend", id: uuidv4() },
  { key: "full stack", value: "full stack", id: uuidv4() },
];

const skillSetOptions = [
  { key: "HTML", value: "HTML", id: uuidv4() },
  { key: "CSS", value: "CSS", id: uuidv4() },
  { key: "JavaScript", value: "JavaScript", id: uuidv4() },
];

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div>
            <FormikControl
              control="input"
              label="Email"
              name="email"
              type="email"
              id={uuidv4()}
            />
          </div>
          <div>
            <FormikControl
              control="textarea"
              label="Bio"
              name="bio"
              id={uuidv4()}
            />
          </div>
          <div>
            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={courseOptions}
              id={uuidv4()}
            />
          </div>
          <div>
            <FormikControl
              control="checkbox"
              label="Skillset"
              name="skillset"
              options={skillSetOptions}
              id={uuidv4()}
            />
          </div>
          <div>
            <FormikControl
              control="date"
              label="Course Date"
              name="courseDate"
              id={uuidv4()}
            />
          </div>
          <button type="submit" disabled={!formik.dirty || !formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
