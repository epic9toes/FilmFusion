import { TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { colors, topMargin } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeartIcon } from "react-native-heroicons/solid";

interface TopButtonsProps {
  extraNativeWindStyle?: string;
}

const TopButtons: React.FC<TopButtonsProps> = ({ extraNativeWindStyle }) => {
  const [isFav, setIsFav] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className={`${extraNativeWindStyle} z-20 flex-row items-center justify-between w-full px-4 ${topMargin}`}
    >
      {/* Back Buttton */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: colors.Gold }}
        className="p-1 rounded-xl"
      >
        <ChevronLeftIcon size={28} strokeWidth={2.5} color={"white"} />
      </TouchableOpacity>
      {/* Fav Button */}
      <TouchableOpacity onPress={() => setIsFav(!isFav)}>
        <HeartIcon size={37} color={isFav ? "red" : "white"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default TopButtons;
