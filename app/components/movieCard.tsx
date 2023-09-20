import { TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { _apiImageBaseUrl, globalHeight, globalWidth } from "../constants";
import { Movie } from "../navigation/types";
import { imageW500 } from "../api/themoviedb";

interface MovieCardProps {
  item: Movie;
  handleClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={{
          uri: imageW500(item.poster_path),
        }}
        style={{ width: globalWidth(48), height: globalHeight(40) }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
export default MovieCard;
