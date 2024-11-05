import { I18nManager, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import i18n from "@/i18n";
import LocalSwitcher from "@/components/LocalSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function index() {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: colors.text }}>
          {i18n.t("welcome")} {I18nManager.isRTL ? " RTL" : " LTR"}
        </Text>
        <LocalSwitcher />
        <ThemeSwitcher />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
