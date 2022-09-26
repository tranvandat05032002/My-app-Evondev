import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

// const SignUpFormV2 = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//     },
//     // validate,
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(20, "Must be less than 20 character")
//         .required("Required"),
//       lastName: Yup.string()
//         .max(20, "Must be less than 20 character")
//         .required("Required"),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   console.log(formik);
//   return (
//     <form
//       className="w-full max-w-[500px] mx-auto p-10"
//       autoComplete="off"
//       onSubmit={formik.handleSubmit}
//     >
//       <div className="flex flex-col gap-2 mb-5">
//         <label htmlFor="firstName">FirstName</label>
//         <input
//           type="text"
//           name="firstName"
//           id="firstName"
//           placeholder="Enter your first name"
//           className="border border-gray-400 p-4 rounded-md"
//           // value={formik.values.firstName}
//           // onChange={formik.handleChange}
//           // onBlur={formik.handleBlur}
//           {...formik.getFieldProps("firstName")}
//         />
//         {formik.touched.firstName && formik.errors.firstName ? (
//           <div className="text-sm text-red-500">{formik.errors.firstName}</div>
//         ) : null}
//       </div>

//       <div className="flex flex-col gap-2 mb-5">
//         <label htmlFor="lastName">LastName</label>
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Enter last name"
//           className="border border-gray-400 p-4 rounded-md"
//           // value={formik.values.lastName}
//           // onChange={formik.handleChange}
//           // onBlur={formik.handleBlur}
//           {...formik.getFieldProps("lastName")}
//         />
//         {formik.touched.lastName && formik.errors.lastName ? (
//           <div className="text-sm text-blue-400">{formik.errors.lastName}</div>
//         ) : null}
//       </div>
//       <button
//         className="p-4 bg-blue-500 font-normal w-full rounded-lg text-white"
//         type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(15, "Must be 15 character or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">firstName </label>
          <Field
            name="firstName"
            className="p-4 rounded-md border border-gray-100"
            placeholder="Enter your first name"
            type="text"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">lastName</label>
          <Field
            name="lastName"
            placeholder="Enter your last name"
            type="text"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
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
  );
};

export default SignUpFormV2;
