import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/layout/TabBar";

export default function _layout() {
  const screens = [
    {
      name: "index",
      label: "الرئيسية",
      icon: "home",
    },

    {
      name: "search",
      label: "البحث",
      icon: "search",
    },

    {
      name: "cart",
      label: "عربة التسوق",
      icon: "cart",
    },

    {
      name: "profile",
      label: "الملف الشخصي",
      icon: "person",
    },
  ];
  return (
    <>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        {screens.map((e, i) => {
          return (
            <Tabs.Screen
              name={e.name}
              key={i}
              options={{ headerShown: false, title: e.label }}
            />
          );
        })}
      </Tabs>
    </>
  );
}
