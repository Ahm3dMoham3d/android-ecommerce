import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { SPACING, TEXT } from "@/constants/Sizes";
import { Formik } from "formik";
import { WholesomeSchema } from "./validation";
import FormError from "./FormError";
import { router } from "expo-router";
import ImageInput from "../ui/ImageInput";

export default function WholesomeSignup() {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        commercial_register: "",
        tax_number: "",
        banner: "", // Field for storing the image URI
      }}
      onSubmit={(values) => router.push("/auth")}
      validationSchema={WholesomeSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => {
        return (
          <View>
            {/* Name Field */}
            <Input
              changeValue={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              label="الأسم"
              placeholder="من فضلك قم بكتابة اسمك"
              required
              keyboardType="default"
            />
            {errors.name && touched.name ? (
              <FormError err={errors.name} />
            ) : null}

            {/* Email Field */}
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

            {/* Password Field */}
            <Input
              changeValue={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              label="كلمة المرور"
              placeholder="من فضلك قم بكتابة كلمة المرور"
              required
              keyboardType="default"
              secureTextEntry
              style={{ marginTop: SPACING * 4 }}
            />
            {errors.password && touched.password ? (
              <FormError err={errors.password} />
            ) : null}

            {/* Phone Field */}
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

            {/* Address Field */}
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

            {/* Commercial Register Field */}
            <Input
              changeValue={handleChange("commercial_register")}
              onBlur={handleBlur("commercial_register")}
              value={values.commercial_register}
              label="السجل التجاري"
              placeholder="من فضلك قم بأدخال السجل التجاري الخاص بك (اختياري)"
              keyboardType="default"
              style={{ marginTop: SPACING * 4 }}
            />

            {/* Tax Number Field */}
            <Input
              changeValue={handleChange("tax_number")}
              onBlur={handleBlur("tax_number")}
              value={values.tax_number}
              label="الرقم الضريبي"
              placeholder="من فضلك قم بأدخال الرقم الضريبي الخاص بك (اختياري)"
              keyboardType="default"
              style={{ marginTop: SPACING * 4 }}
            />

            <ImageInput changeImage={(e) => setFieldValue("banner", e)} />

            {errors.banner ? <FormError err={errors.banner} /> : null}

            {/* Submit Button */}
            <Button
              style={{ marginTop: SPACING * 8 }}
              label="تسجيل"
              action={handleSubmit}
            />
          </View>
        );
      }}
    </Formik>
  );
}
