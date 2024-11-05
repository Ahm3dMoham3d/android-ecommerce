import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
export default function index() {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: colors.card, padding: 15 }}>
        <Text style={{ color: colors.text }}>Hello world</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
