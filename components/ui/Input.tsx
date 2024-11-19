import { SPACING, TEXT } from "@/constants/Sizes";
import { useTheme } from "@react-navigation/native";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  TextInput,
  Text,
  Keyboard,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";

type KeyboardType =
  | "default"
  | "email-address"
  | "numeric"
  | "phone-pad"
  | "ascii-capable"
  | "decimal-pad"
  | "url"
  | "visible-password";

type InputProps = {
  value?: string | undefined;
  changeValue?(e: string | ChangeEvent<any>): void;
  onBlur?(e?: any): void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  icon?: keyof typeof Ionicons.glyphMap;
};
export default function Input({
  value,
  changeValue,
  onBlur,
  label,
  placeholder,
  required,
  keyboardType = "default",
  secureTextEntry = false,
  icon,
  style,
}: InputProps) {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderRadius: SPACING,
      paddingHorizontal: SPACING * 2,
      paddingVertical: SPACING * 2,
      borderColor: colors.border,
      fontSize: TEXT,
      fontFamily: "regular",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    label: {
      fontFamily: "regular",
      fontSize: TEXT,
      marginBottom: SPACING * 1.5,
    },
    focus: {
      borderColor: colors.primary,
    },
  });

  const input = useRef<TextInput>(null);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        if (input.current) {
          input.current.blur();
        }
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const [focus, setFocus] = useState(false);
  const [secureEntry, setSecureEntry] = useState(secureTextEntry);
  const handleBlur = () => {
    setFocus(false);
    onBlur;
  };
  return (
    <View style={style}>
      {label && (
        <Text aria-label={label} nativeID={label} style={styles.label}>
          {label} {required && <Text style={{ color: "red" }}>*</Text>}
        </Text>
      )}
      <View style={[styles.input, focus ? styles.focus : null]}>
        <TextInput
          style={{
            width: secureTextEntry || icon ? "90%" : "100%",
            fontFamily: "regular",
          }}
          aria-label={label}
          aria-labelledby={label}
          ref={input}
          onChangeText={changeValue}
          cursorColor={colors.primary}
          onFocus={() => setFocus(true)}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          textAlign="right"
          keyboardType={secureTextEntry ? "default" : keyboardType}
          secureTextEntry={secureEntry}
        />
        {secureTextEntry && (
          <Pressable
            onPress={() => setSecureEntry(!secureEntry)}
            style={{ paddingHorizontal: SPACING }}
          >
            <Ionicons
              name={secureEntry ? "eye" : "eye-off"}
              size={24}
              color="black"
            />
          </Pressable>
        )}
        {icon && <Ionicons name={icon} size={24} color="black" />}
      </View>
    </View>
  );
}
