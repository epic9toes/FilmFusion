import { View } from "react-native";
import React from "react";
import { colors, globalHeight, globalWidth } from "../constants";
import * as Progress from "react-native-progress";

export default function Loading() {
  return (
    <View
      style={{ width: globalWidth(100), height: globalHeight(100) }}
      className="absolute flex-row items-center justify-center"
    >
      <Progress.CircleSnail thickness={12} size={160} color={colors.Gold} />
    </View>
  );
}
