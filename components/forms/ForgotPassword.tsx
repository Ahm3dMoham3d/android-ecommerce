import { View, Text } from "react-native";
import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { SPACING } from "@/constants/Sizes";
import { Formik } from "formik";
import { LoginSchema } from "./validation";
import FormError from "./FormError";
import { Link, router } from "expo-router";
import { useTheme } from "@react-navigation/native";

export default function Auth() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => router.push("/home")}
      validationSchema={LoginSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          <Input
            changeValue={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            label="الحساب"
            placeholder="من فضلك قم بكتابة حسابك الشخصي"
            required
            keyboardType="email-address"
            style={{ marginTop: SPACING * 4 }}
          />
          {errors.email && touched.email ? (
            <FormError err={errors.email} />
          ) : null}

          <Button
            style={{ marginTop: SPACING * 8 }}
            label="استرجاع كلمة المرور"
            action={() => handleSubmit()}
          />
        </View>
      )}
    </Formik>
  );
}
