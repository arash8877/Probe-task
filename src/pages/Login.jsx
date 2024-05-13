import React from 'react'
import LoginForm from '../components/LoginForm';


import {useFormik} from "formik";
import * as Yup from "yup";

const Login = () => {

     const formik = useFormik({
          initialValues: {
               email: "",
               password: "",
          },
          onSubmit: () => {
             
          },
 })

     
  return (
   <section></section>
  );
}

export default Login