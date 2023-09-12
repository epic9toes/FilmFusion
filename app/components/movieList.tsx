import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { Movie, RootStackNavigationProp } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { globalHeight, globalWidth } from "../constants";

interface MovieListProps {
  Movies: Movie[];
  title?: string;
}
const MovieList: React.FC<MovieListProps> = ({ Movies, title }) => {
  const navigation = useNavigation<RootStackNavigationProp<"Movie">>();
  // Function to navigate to the "Movie" screen with a selected movie object
  const handleClick = (selectedMovie: Movie) => {
    navigation.navigate("Movie", { movie: selectedMovie });
  };

  return (
    <View className="mt-1 mb-8 space-y-4">
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-xl text-white">{title}</Text>
        <TouchableOpacity>
          <Text className="text-lg font-semibold text-yellow-700">See All</Text>
        </TouchableOpacity>
      </View>
      {/* movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {Movies.map((item, index) => {
          return (
            <TouchableOpacity
              className="items-center"
              key={index}
              onPress={() => handleClick(item)}
            >
              <View className="mr-4 space-y-1">
                <Image
                  className="rounded-xl"
                  source={require("../assets/images/movie1.jpg")}
                  style={{ width: globalWidth(30), height: globalHeight(25) }}
                />
              </View>
              <Text
                style={{ width: globalWidth(25) }}
                className="ml-1 text-neutral-300"
                numberOfLines={1}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
