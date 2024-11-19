import { View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { SPACING, TEXT } from "@/constants/Sizes";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
export default function ImageInput({
  changeImage,
}: {
  changeImage(e: string | null): void;
}) {
  const hasMounted = useRef(false);
  const { colors } = useTheme();
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    changeImage(image);
  }, [image]);

  return (
    <TouchableOpacity
      onPress={pickImage}
      style={{
        marginTop: SPACING * 4,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: SPACING,
        padding: SPACING * 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: SPACING,
      }}
    >
      {!image ? (
        <>
          <Ionicons name="image" size={24} color={colors.text} />
          <Text
            style={{
              color: colors.text,
              fontFamily: "regular",
              fontSize: TEXT,
            }}
          >
            صورة بانر المحل <Text style={{ color: "red" }}>*</Text>
          </Text>
        </>
      ) : (
        <>
          <Text
            style={{
              color: colors.text,
              fontFamily: "regular",
              fontSize: TEXT,
            }}
          >
            صورة بانر المحل <Text style={{ color: "red" }}>*</Text>
          </Text>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 100, marginTop: SPACING * 2 }}
            resizeMode="stretch"
          />
        </>
      )}
    </TouchableOpacity>
  );
}
