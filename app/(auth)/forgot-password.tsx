import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SPACING, TITLE } from "@/constants/Sizes";
import ForgotPasswordForm from "@/components/forms/ForgotPassword";
export default function ForgotPassword() {
  return (
    <View>
      <Text style={styles.title}>نسيت كلمة المرور</Text>
      <ForgotPasswordForm />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "medium",
    fontSize: TITLE,
    marginBottom: SPACING * 4,
  },
});
