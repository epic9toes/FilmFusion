import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Platform } from "react-native";

const ios = Platform.OS === "ios";
export const topMargin = ios ? "" : " mt-3";

export const globalHeight = hp;
export const globalWidth = wp;
export const URL_API = `https://themealdb.com/api/json/v1/1/`;

export const colors = {
  Gold: "#FFD700",
  LightSalmon: "#FFA07A",
  Plum: "#DDA0DD",
};
