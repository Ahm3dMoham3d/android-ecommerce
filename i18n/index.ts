import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import AsyncStorage from "@react-native-async-storage/async-storage";

async function loadTranslations(locale: any) {
  const translations =
    locale === "ar"
      ? require("./translations/ar.json")
      : require("./translations/en.json");
  i18n.store(translations);
}

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("lang");
  if (savedLanguage) {
    i18n.locale = savedLanguage;
  } else {
    i18n.locale = getLocales()[0].languageCode ?? "ar";
  }
};

const i18n = new I18n();
i18n.enableFallback = true;

initI18n().then(() => loadTranslations(i18n.locale));

export default i18n;
