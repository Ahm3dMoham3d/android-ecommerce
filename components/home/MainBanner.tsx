import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { SPACING, VW } from "@/constants/Sizes";
import Carousel from "react-native-reanimated-carousel";

export default function MainBanner({ style }: { style?: ViewStyle }) {
  const containerWidth = VW;
  const containerHeight = (containerWidth * 9) / 16;
  const data = useSelector((state: RootState) => state.deals.mainBanner);
  return (
    <View
      style={{
        alignItems: "center",
        ...style,
      }}
    >
      <Carousel
        loop
        mode="parallax"
        width={containerWidth}
        height={containerHeight}
        autoPlay={true}
        autoPlayReverse
        modeConfig={{
          parallaxScrollingOffset: VW / 3.8,
        }}
        data={data}
        scrollAnimationDuration={1800}
        renderItem={({ index }) => (
          <TouchableOpacity onPress={() => console.log(data[index].name)}>
            <Image
              source={{ uri: data[index].img }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: SPACING * 2,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
