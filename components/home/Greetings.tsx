import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SPACING, SUBTITLE, TEXT, TITLE } from "@/constants/Sizes";

export default function Greetings() {
  const greets = {
    goodMorning: {
      title: "صباح الفل",
      text: "نتمنى لك تجربة تسوق ممتازة وبداية يوم مليانة خير.",
    },
    goodAfternoon: {
      title: "مساء النور",
      text: "نتمنى لك تجربة تسوق ممتعة ويوم جميل ومريح.",
    },
    goodNight: {
      title: "مساء النور",
      text: "نتمنى لك تجربة تسوق رائعة وليلة مليانة هدوء وراحة.",
    },
  };

  function getCurrentGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return greets.goodMorning;
    } else if (currentHour >= 12 && currentHour < 18) {
      return greets.goodAfternoon;
    } else {
      return greets.goodNight;
    }
  }

  const [currentGreeting, setCurrentGreeting] = useState(getCurrentGreeting());

  useEffect(() => {
    // Update greeting every minute
    const interval = setInterval(() => {
      setCurrentGreeting(getCurrentGreeting());
    }, 1 * 60 * 60 * 1000); // 60000ms = 1 minute

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <View>
      <Text style={{ fontSize: SUBTITLE, fontFamily: "medium" }}>
        {currentGreeting.title}
      </Text>
      <Text style={{ fontSize: TEXT, fontFamily: "regular", opacity: 0.8 }}>
        {currentGreeting.text}
      </Text>
    </View>
  );
}
