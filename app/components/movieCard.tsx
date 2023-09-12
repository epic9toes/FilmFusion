import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { globalHeight, globalWidth } from "../constants";

interface MovieCardProps {
  item: object;
  handleClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={require("../assets/images/movie1.jpg")}
        style={{ width: globalWidth(48), height: globalHeight(40) }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
export default MovieCard;
