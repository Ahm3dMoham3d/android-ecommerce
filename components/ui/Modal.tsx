import { Modal as ModalClass, View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useTheme } from "@react-navigation/native";
import Button from "./Button";

type ModalProps = {
  visible: boolean;
  title: string;
  text: string;
  action(): void;
  closeModal(): void; // Function to close the modal from the parent
};

export default function Modal({
  text,
  action,
  title,
  visible,
  closeModal,
}: ModalProps) {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <ModalClass animationType="fade" visible={visible} transparent={true}>
      <View
        style={{
          backgroundColor:
            colorScheme === "dark"
              ? "rgba(18, 18, 18, 0.8)"
              : "rgba(45, 45, 45, 0.8)",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.card,
            width: "80%",
            height: "auto",
            padding: 16,
            borderRadius: 4,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: "medium",
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            {title}
          </Text>
          <Text style={{ color: colors.text }}>{text}</Text>
          <View
            style={{ flexDirection: "row", gap: 8, justifyContent: "flex-end" }}
          >
            <Button
              variant="ghost"
              label="Cancel"
              styles={{ marginTop: 16 }}
              action={closeModal}
            />

            <Button
              label="Restart"
              styles={{ marginTop: 16 }}
              action={() => {
                action();
                closeModal(); // Close modal after action
              }}
            />
          </View>
        </View>
      </View>
    </ModalClass>
  );
}
