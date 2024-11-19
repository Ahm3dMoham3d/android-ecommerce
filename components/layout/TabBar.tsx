import { View, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SPACING } from "@/constants/Sizes";

import TabBarButton from "./TabBarButton";
export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : typeof options.title === "string"
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onLongPress={onLongPress}
            onPress={onPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: SPACING * 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: SPACING * 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: SPACING * 2.5 },
    shadowRadius: SPACING * 2.5,
    shadowOpacity: 1,
    borderRadius: SPACING * 2,
    paddingVertical: SPACING * 3,
    paddingHorizontal: SPACING * 4,
  },
});
