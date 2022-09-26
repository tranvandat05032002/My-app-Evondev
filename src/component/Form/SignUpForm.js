import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be less than 20 characters";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required last name";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be less than 20 characters last name";
//   }

//   return errors;
// };
// console.log(validate);
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be less than 20 character")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be less than 20 character")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      className="w-full max-w-[500px] mx-auto p-10"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          className="border border-gray-400 p-4 rounded-md"
          // value={formik.values.firstName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          className="border border-gray-400 p-4 rounded-md"
          // value={formik.values.lastName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-blue-400">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <button
        className="p-4 bg-blue-500 font-normal w-full rounded-lg text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
