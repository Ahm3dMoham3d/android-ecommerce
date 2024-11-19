import { Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SPACING, TITLE } from "@/constants/Sizes";
import Button from "@/components/ui/Button";
import GoogleButton from "@/components/ui/GoogleButton";
import RetailSignup from "@/components/forms/RetailSignup";
import Divider from "@/components/ui/Divider";
import { router } from "expo-router";
import { ModalProvider } from "@/components/ui/Modal";
export default function Retail() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <Text style={styles.title}>تسجيل حساب عملاء</Text>

      <RetailSignup />
      <Divider text="أو" style={{ marginVertical: SPACING * 4 }} />
      <GoogleButton />

      <Button
        action={() => setModal(true)}
        style={{ marginTop: SPACING * 2 }}
        variant="ghost"
        label="تصفح المنتجات بدون تسجيل"
      />

      <ModalProvider
        visible={modal}
        action={() => router.replace("/(main)/home")}
        close={() => setModal(false)}
        actionLabel="تصفح"
        title="تصفح المنتجات"
        text="يمكن تصفح المنتجات ولاكن لن تستطيع اتمام اي عملية شراء ان لم تكن مسجل بالتطبيق"
      />
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
