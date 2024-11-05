import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useColorScheme } from "@/hooks/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface ThemeState {
  mode: "light" | "dark" | "auto";
}

const initialState: ThemeState = {
  mode: "auto",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark" | "auto">) => {
      state.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
