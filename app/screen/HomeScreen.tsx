import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AsyncKey, removeItem } from "../helpers/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "app/navigation/types";

export default function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp<"Onboarding">>();
  const handleAsyncReset = async () => {
    await removeItem(AsyncKey);
    navigation.push("Onboarding");
  };
  return (
    <View className="flex items-center justify-center flex-1">
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={handleAsyncReset}
        className="px-5 py-2 my-5 bg-teal-700 rounded-md "
      >
        <Text className="font-bold text-white">Show Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}
