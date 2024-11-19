import { View, Text, Modal, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SPACING, SUBTITLE, TEXT } from "@/constants/Sizes";
import Button from "./Button";

type ModalProps = {
  title: string;
  text: string;
  visible: boolean;
  actionLabel: string;
  action(): void;
  close(): void;
};

const ModalProvider = ({
  title,
  text,
  visible,
  actionLabel,
  action,
  close,
}: ModalProps) => {
  const { colors } = useTheme();

  return (
    <Modal
      animationType="fade"
      visible={visible}
      statusBarTranslucent={true}
      transparent={true}
    >
      <TouchableWithoutFeedback touchSoundDisabled onPress={close}>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableWithoutFeedback touchSoundDisabled onPress={() => {}}>
            <View
              style={{
                backgroundColor: colors.background,
                width: "85%",
                height: "auto",
                padding: SPACING * 4,
                borderRadius: SPACING,
              }}
            >
              <Text style={{ fontFamily: "medium", fontSize: SUBTITLE * 1.1 }}>
                {title}
              </Text>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: TEXT,
                  marginVertical: SPACING * 4,
                }}
              >
                {text}
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: SPACING * 2,
                  justifyContent: "flex-end",
                }}
              >
                <Button label="الغاء" variant="ghost" action={close} />

                <Button
                  label={actionLabel}
                  variant="default"
                  action={() => {
                    action();
                    close();
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export { ModalProvider };
