import { Text, StyleSheet } from "react-native";
import { SPACING, TEXT, TITLE } from "@/constants/Sizes";
import GoogleButton from "@/components/ui/GoogleButton";
import Login from "@/components/forms/Login";
import Divider from "@/components/ui/Divider";
import { Link } from "expo-router";

import { useTheme } from "@react-navigation/native";
export default function Auth() {
  const { colors } = useTheme();
  return (
    <>
      <Text style={styles.title}>تسجيل دخول</Text>
      <Login />
      <Divider text="أو" style={{ marginVertical: SPACING * 4 }} />
      <GoogleButton />

      <Link
        style={{
          fontFamily: "medium",
          marginTop: SPACING * 4,
          color: colors.primary,
          textAlign: "center",
          fontSize: TEXT,
        }}
        href={"/choose-type"}
      >
        لا تمتلك حساب ؟ قم بالتسجيل
      </Link>
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
