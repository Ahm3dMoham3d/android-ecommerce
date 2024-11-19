import { ScrollView } from "react-native";
import MainBanner from "@/components/home/MainBanner";
import ScreenContainer from "@/components/layout/ScreenContainer";
import Greetings from "@/components/home/Greetings";
import HotDeals from "@/components/home/HotDeals";
import ChangeType from "@/components/ChangeType";
import Categories from "@/components/home/Categories";
import { SPACING } from "@/constants/Sizes";

export default function Index() {
  return (
    <ScreenContainer>
      <ScrollView>
        <Greetings />
        <ChangeType style={{ marginTop: SPACING * 4, marginBottom: SPACING }} />
        <MainBanner />
        <HotDeals />
        <Categories style={{ marginTop: SPACING * 4 }} />
      </ScrollView>
    </ScreenContainer>
  );
}
