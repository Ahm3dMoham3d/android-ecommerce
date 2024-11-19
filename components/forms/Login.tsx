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
  const { colors } = useTheme();
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

          <Input
            changeValue={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            label="كلمة المرور"
            placeholder="من فضلك قم بكتابة  كلمة المرور"
            required
            keyboardType="default"
            secureTextEntry
            style={{ marginTop: SPACING * 4 }}
          />

          {errors.password && touched.password ? (
            <FormError err={errors.password} />
          ) : null}

          <Link
            style={{
              fontFamily: "regular",
              marginTop: SPACING * 2,
              color: colors.primary,
            }}
            href={"/forgot-password"}
          >
            نسيت كلمة المرور ؟
          </Link>

          <Button
            style={{ marginTop: SPACING * 8 }}
            label="تسجيل"
            action={() => handleSubmit()}
          />
        </View>
      )}
    </Formik>
  );
}
