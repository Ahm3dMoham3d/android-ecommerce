import { View, Text } from "react-native";
import React, { useState } from "react";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { SPACING, SUBTITLE } from "@/constants/Sizes";
import Input from "@/components/ui/Input";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <ScreenContainer>
      <View>
        <Text
          style={{
            fontSize: SUBTITLE,
            fontFamily: "medium",
            marginBottom: SPACING * 4,
          }}
        >
          البحث عن منتج
        </Text>
        <Input
          value={searchValue}
          changeValue={(e) => setSearchValue(e as string)}
          placeholder="بحث بأسم المنتج ..."
          keyboardType="default"
          icon="search"
        />
      </View>
    </ScreenContainer>
  );
}
