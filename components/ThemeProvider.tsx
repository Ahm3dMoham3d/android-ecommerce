import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as Wrapper,
} from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setTheme } from "@/store/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "@/hooks/useColorScheme";

export const getTheme = async (dispatch: any) => {
  const theme = await AsyncStorage.getItem("theme");
  if (theme === "dark" || theme === "auto" || theme === "light")
    dispatch(setTheme(theme));
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scheme = useColorScheme();
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  const setColorScheme = () => {
    if (theme === "auto") {
      if (scheme === "dark") {
        return DarkTheme;
      } else {
        return DefaultTheme;
      }
    } else if (theme === "dark") {
      return DarkTheme;
    } else {
      return DefaultTheme;
    }
  };

  return <Wrapper value={setColorScheme()}>{children}</Wrapper>;
}
