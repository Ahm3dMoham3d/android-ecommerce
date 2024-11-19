import { View, Text } from "react-native";
import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { SPACING } from "@/constants/Sizes";
import { Formik } from "formik";
import { RetailSignupSchema } from "./validation";
import FormError from "./FormError";
import { router } from "expo-router";

export default function RetailSignup() {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        password: "",
        address: "",
      }}
      onSubmit={(values) => router.push("/auth")}
      validationSchema={RetailSignupSchema}
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
            changeValue={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            label="الأسم"
            placeholder="من فضلك قم بكتابة اسمك"
            required
            keyboardType="default"
          />
          {errors.name && touched.name ? <FormError err={errors.name} /> : null}
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
          <Input
            changeValue={handleChange("phone")}
            onBlur={handleBlur("phone")}
            value={values.phone}
            label="رقم الهاتف"
            placeholder="من فضلك قم بكتابة رقم الهاتف الخاص بك"
            required
            keyboardType="phone-pad"
            style={{ marginTop: SPACING * 4 }}
          />

          {errors.phone && touched.phone ? (
            <FormError err={errors.phone} />
          ) : null}

          <Input
            changeValue={handleChange("address")}
            onBlur={handleBlur("address")}
            value={values.address}
            label="العنوان"
            placeholder="من فضلك قم بكتابة العنوان الخاص بك كاملا"
            required
            keyboardType="default"
            style={{ marginTop: SPACING * 4 }}
          />

          {errors.address && touched.address ? (
            <FormError err={errors.address} />
          ) : null}

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
