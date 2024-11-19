import { SPACING } from "@/constants/Sizes";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const animationProgress = useSharedValue(1);

  useFocusEffect(
    useCallback(() => {
      animationProgress.value = 0;
      animationProgress.value = withTiming(1, { duration: 300 });
    }, [])
  );

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: animationProgress.value,
  }));

  return (
    <SafeAreaView style={{ padding: SPACING * 4, paddingBottom: SPACING * 22 }}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
