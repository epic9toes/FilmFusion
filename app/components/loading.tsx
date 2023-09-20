import { ActivityIndicator, View } from "react-native";
import React from "react";
import { colors, globalHeight, globalWidth } from "../constants";

export default function Loading() {
  return (
    <View
      style={{ width: globalWidth(100), height: globalHeight(100) }}
      className="absolute flex-row items-center justify-center"
    >
      <ActivityIndicator color={colors.Gold} size={globalHeight(10)} />
    </View>
  );
}
