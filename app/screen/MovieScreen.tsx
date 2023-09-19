import { View, Image, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { Movie, Person, RootStackParamList } from "app/navigation/types";
import { globalHeight, globalWidth } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";
import TopButtons from "../components/topButtons";

type MovieScreenProps = {
  route: RouteProp<RootStackParamList, "Movie">;
};

const MovieScreen: React.FC<MovieScreenProps> = ({ route }) => {
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([
    { id: 1, name: "The Flying Dragon" },
    { id: 1, name: "Shining Amour" },
    { id: 1, name: "The Offer" },
  ]);
  const [cast, setCast] = useState<Person[]>([
    {
      id: 1,
      name: "Sabastin",
    },
    {
      id: 2,
      name: "Nneka",
    },
    {
      id: 3,
      name: "Grace",
    },
  ]);
  const movie = route.params;
  const { id, name } = route.params.movie;

  useEffect(() => {
    //logic
  }, [movie]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* Back button and Movie Poster */}
      <View className="w-full">
        <TopButtons extraNativeWindStyle="absolute" />
        <View>
          <Image
            source={require("../assets/images/movie1.jpg")}
            style={{ width: globalWidth(100), height: globalHeight(55) }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width: globalWidth(100), height: globalHeight(40) }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* Movie Details */}
      <View style={{ marginTop: -globalHeight(0.09) }} className="space-y-3">
        <Text className="text-3xl font-bold tracking-wider text-center text-white">
          {name}
        </Text>
        {/* status, release, runtime */}
        <Text className="text-base font-semibold text-center text-neutral-400">
          Released * 2020 * 170 min
        </Text>

        {/* Genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-base font-semibold text-center text-neutral-400">
            Action *
          </Text>
          <Text className="text-base font-semibold text-center text-neutral-400">
            Thrill *
          </Text>
          <Text className="text-base font-semibold text-center text-neutral-400">
            Comedy
          </Text>
        </View>
        {/* Movie Description */}
        <Text className="mx-4 tracking-wide text-neutral-400">
          LottieFiles takes away the complexity from motion design. It lets you
          create, edit, test, collaborate and ship a Lottie in the easiest way
          possible.
        </Text>
      </View>

      {/* Cast Memebers */}
      <Cast cast={cast} />
      {/* Similar Movies */}
      <MovieList title="Similar Movies" Movies={similarMovies} />
    </ScrollView>
  );
};

export default MovieScreen;
