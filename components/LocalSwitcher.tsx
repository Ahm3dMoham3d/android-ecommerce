import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  I18nManager,
  Platform,
} from "react-native";
import i18n from "@/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "./ui/Modal";
import * as Updates from "expo-updates";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

export default function LocalSwitcher() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"ar" | "en">("ar");

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const changeLang = async (lang: "ar" | "en") => {
    await AsyncStorage.setItem("lang", lang).then(() => {
      i18n.locale = lang;
      Updates.reloadAsync();
    });
  };

  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          backgroundColor: i18n.locale == "en" ? colors.primary : colors.card,
          padding: 6,
          paddingHorizontal: 8,
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        }}
        onPress={() => {
          setSelectedLang("en");
          openModal();
        }}
        disabled={i18n.locale == "en"}
      >
        <Text
          style={{
            color: i18n.locale == "en" ? "white" : colors.text,
            fontSize: 16,
          }}
        >
          EN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: i18n.locale == "ar" ? colors.primary : colors.card,
          padding: 6,
          paddingHorizontal: 8,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        }}
        onPress={() => {
          setSelectedLang("ar");
          openModal();
        }}
        disabled={i18n.locale == "ar"}
      >
        <Text
          style={{
            color: i18n.locale == "ar" ? "white" : colors.text,
            fontSize: 16,
          }}
        >
          AR
        </Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        action={() => changeLang(selectedLang)}
        title="Change Language"
        text={i18n.t("change_lang")}
        closeModal={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
