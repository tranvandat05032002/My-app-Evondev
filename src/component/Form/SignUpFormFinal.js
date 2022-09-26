import React from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage, Form, Field } from "formik";

const SignUpFormV2 = () => {
  return (
    <>
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
          emailAddress: Yup.string()
            .max(20, "Must be 20 character or lesss")
            .required("Please enter your emailAddress"),
          intro: Yup.string()
            .max(20, "Must be 20 character or less")
            .required("Please enter your intro"),
          job: Yup.string().required("select than a job"),
        })}
      >
        <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="firstName">firstName</label>
            <Field
              type="text"
              placeholder="Enter your firstName"
              name="firstName"
              className="p-4 rounded-md border border-gray-100"
            />
            <div className="text-sm text-red-500">
              <ErrorMessage name="firstName"></ErrorMessage>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="lastName">lastName</label>
            <Field
              type="text"
              placeholder="Enter your lastName"
              name="lastName"
              className="p-4 rounded-md border border-gray-100"
            />
            <div className="text-sm text-red-500">
              <ErrorMessage name="passWord"></ErrorMessage>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="emailAddress">emailAddress</label>
            <Field
              type="text"
              placeholder="Enter your emailAddress"
              name="emailAddress"
              className="p-4 rounded-md border border-gray-100"
            />
            <div className="text-sm text-red-500">
              <ErrorMessage name="emailAddress"></ErrorMessage>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="intro">Intro</label>
            <Field
              placeholder="Introduce yourself"
              name="intro"
              className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
              as="textarea"
            />
            <div className="text-sm text-red-500">
              <ErrorMessage name="intro"></ErrorMessage>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="job">Your job</label>
            <Field
              placeholder="Introduce yourself"
              name="intro"
              className="p-4 rounded-md border border-gray-100"
              as="select"
            >
              <option value="frontend">Front-End developer</option>
              <option value="backend">Back-End developer</option>
              <option value="fullstack">Fullstack developer</option>
            </Field>
            <div className="text-sm text-red-500">
              <ErrorMessage name="job"></ErrorMessage>
            </div>
          </div>

          <div className="flex gap-2 items-center mb-5">
            <Field
              name="terms"
              className="p-4 rounded-md border border-gray-100"
              type="checkbox"
            ></Field>
            <p>I accept the terms and conditions</p>
            <div className="text-sm text-red-500">
              <ErrorMessage name="terms"></ErrorMessage>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full p-4 bg-blue-600 text-white font-normal rounded-lg"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpFormV2;
