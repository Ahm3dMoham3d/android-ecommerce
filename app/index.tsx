import { ActivityIndicator, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { SPACING, TITLE, SUBTITLE } from "@/constants/Sizes";
import Button from "@/components/ui/Button";
import { Redirect, router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false);

  const checkOnBoard = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnBoarding");
      if (value !== null) {
        setViewedOnBoarding(true);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnBoard();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : viewedOnBoarding ? (
        <Redirect href={"/main/(tabs)"} />
      ) : (
        <OnBoardScreen />
      )}
    </SafeAreaView>
  );
}

const Loading = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  );
};

const OnBoardScreen = () => {
  const OnBoardBG = require("@/assets/images/onboard.jpg");
  const { colors } = useTheme();
  return (
    <>
      <View style={{ height: "55%" }}>
        <ImageBackground
          resizeMode="cover"
          style={{ flex: 1 }}
          source={OnBoardBG}
        ></ImageBackground>
      </View>
      <View
        style={{
          backgroundColor: colors.card,
          marginTop: SPACING * -12,
          padding: SPACING * 4,
          width: "80%",
          marginHorizontal: "auto",
          borderRadius: SPACING,
          shadowColor: colors.border,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: TITLE,
            textAlign: "center",
            fontFamily: "medium",
          }}
        >
          مرحبـــــا بـــــــــك
        </Text>
        <Text
          style={{
            fontSize: SUBTITLE,
            textAlign: "center",
            fontFamily: "medium",
            marginTop: SPACING * 6,
          }}
        >
          كل المنتجات اللي محتاجها، جملة أو قطاعي، بأحسن الأسعار موجودة كلها في
          مكان واحد!
        </Text>
        <Button
          style={{ marginTop: SPACING * 10 }}
          label="أبدأ الأن"
          action={() => {
            AsyncStorage.setItem("@viewedOnBoarding", "true");
            router.replace("/main/(tabs)");
          }}
        />
      </View>
    </>
  );
};
