import { Text, StyleSheet } from "react-native";
import { SPACING, TITLE } from "@/constants/Sizes";
import WholesomeSignup from "@/components/forms/WholesomeSignup";

export default function Retail() {
  return (
    <>
      <Text style={styles.title}>تسجيل حساب اصحاب محلات</Text>
      <WholesomeSignup />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "medium",
    fontSize: TITLE,
    marginBottom: SPACING * 4,
  },
});
