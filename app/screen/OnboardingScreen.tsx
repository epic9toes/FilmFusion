import { View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { colors, globalHeight } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../navigation/types";
import { AsyncKey, setItem } from "../helpers/asyncStorage";

export default function OnboardingScreen() {
  const navigation = useNavigation<RootStackNavigationProp<"Home">>();
  const handleOnDone = () => {
    setItem(AsyncKey, "1");
    navigation.navigate("Home");
  };

  return (
    <View className="flex flex-1 bg-white">
      <Onboarding
        onDone={handleOnDone}
        onSkip={handleOnDone}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: colors.Gold,
            image: (
              <LottieView
                style={{ height: globalHeight(35), width: globalHeight(35) }}
                source={require("../assets/animations/2.json")}
                autoPlay
                loop
              />
            ),
            title: "Discover a World of Cinema",
            subtitle: "Explore thousands of movies at your fingertips",
          },
          {
            backgroundColor: colors.Plum,
            image: (
              <LottieView
                style={{ height: globalHeight(35), width: globalHeight(35) }}
                source={require("../assets/animations/3.json")}
                autoPlay
                loop
              />
            ),
            title: "Personalized Recommendations",
            subtitle: "Tailored movie suggestions just for you",
          },
          {
            backgroundColor: colors.LightSalmon,
            image: (
              <LottieView
                style={{ height: globalHeight(35), width: globalHeight(35) }}
                source={require("../assets/animations/1.json")}
                autoPlay
                loop
              />
            ),
            title: "Stream Anywhere, Anytime",
            subtitle: "Enjoy films on the go with FilmFusion",
          },
        ]}
      />
    </View>
  );
}
