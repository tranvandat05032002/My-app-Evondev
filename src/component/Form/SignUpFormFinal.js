import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage, Form, useField } from "formik";

const SignUpFormV2 = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="relative w-full h-full ">
      {loading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-[rgba(0,_0,_0,_0.2)] flex justify-center">
          <div className="mt-[120px] border-8 border-red-400 w-[40px] h-[40px] rounded-full border-r-0 animate-spin"></div>
        </div>
      )}
      <h1 className="text-center my-10 font-bold text-3xl">Register Form</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          emailAddress: "",
          intro: "",
          job: "",
          terms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(20, "Must be 20 character or less")
            .required("Please enter your firstName"),
          lastName: Yup.string()
            .max(20, "Must be 20 character or less")
            .required("Please enter your lastName"),
          emailAddress: Yup.string().required("Please enter your emailAddress"),
          intro: Yup.string().required("Please enter your intro"),
          job: Yup.string().required("select than a job"),
          terms: Yup.boolean().oneOf([true], "Please tick checkbox"),
        })}
        onSubmit={(values, actions) => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 500);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm({
              firstName: "",
              lastName: "",
              emailAddress: "",
              intro: "",
              job: "",
              terms: false,
            });
          }, 1000);
          console.log(values);
        }}
      >
        {(Formik) => {
          return (
            <Form
              className="p-10 w-full max-w-[500px] mx-auto"
              autoComplete="off"
            >
              <MyInput
                label="First name"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                type="text"
              ></MyInput>

              <MyInput
                label="Last name"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                type="text"
              ></MyInput>

              <MyInput
                label="Email address"
                name="emailAddress"
                id="emailAddress"
                placeholder="Enter your email address"
                type="email"
              ></MyInput>

              <MyTextarea
                label="Intro"
                name="intro"
                id="intro"
                placeholder="Introduce yourself"
              ></MyTextarea>
              <MySelect label="Your job" name="job" id="job">
                <option>Select a job</option>
                <option value="frontend">Front-end developer</option>
                <option value="backend">Back-end developer</option>
                <option value="fullstack">Fullstack developer</option>
              </MySelect>

              <MyCheckBox name="terms" type="checkbox">
                <p>I accept the terms and conditions</p>
              </MyCheckBox>

              <div>
                <button
                  type="submit"
                  className={`w-full p-4 bg-blue-600 text-white font-normal rounded-lg ${
                    Formik.isSubmitting ? "opacity-50" : "opacity-100"
                  }`}
                  disabled={Formik.isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <input
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">
          <p>{meta.error}</p>
        </div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <textarea
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">
          <p>{meta.error}</p>
        </div>
      ) : null}
    </div>
  );
};

const MySelect = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={field.name || field.id}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      >
        {children}
      </select>

      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">
          <ErrorMessage name="job"></ErrorMessage>
        </div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex gap-2 flex-col mb-5">
      <div className="flex items-center gap-2">
        <input
          className="p-4 rounded-md border border-gray-100"
          type={props.type}
          {...field}
          {...props}
        ></input>
        {children}
      </div>
      {/* <p>I accept the terms and conditions</p> */}
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">
          <ErrorMessage name="terms"></ErrorMessage>
        </div>
      ) : null}
    </div>
  );
};

export default SignUpFormV2;
