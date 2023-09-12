import { View, Text } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./movieCard";
import { globalWidth } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { Movie, RootStackNavigationProp } from "../navigation/types";

interface TrendingMoviesProps {
  Movies: Movie[];
}
const TrendingMovies: React.FC<TrendingMoviesProps> = ({ Movies }) => {
  const navigation = useNavigation<RootStackNavigationProp<"Movie">>();

  // Function to navigate to the "Movie" screen with a selected movie object
  const handleClick = (selectedMovie: Movie) => {
    navigation.navigate("Movie", { movie: selectedMovie });
  };
  return (
    <View>
      <Text className="mx-4 mb-5 text-xl text-white">Trending</Text>
      <Carousel
        data={Movies}
        renderItem={({ item }: { item: Movie }) => (
          <MovieCard handleClick={() => handleClick(item)} item={item} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={globalWidth(90)}
        itemWidth={globalWidth(50)}
        sliderStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};
export default TrendingMovies;
