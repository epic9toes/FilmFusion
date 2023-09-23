import { View, Image, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import TopButtons from "../components/topButtons";
import { globalHeight, globalWidth } from "../constants";
import MovieList from "../components/movieList";
import { Movie, Person, RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";
import {
  fallBackPersonPoster,
  fetchActorDetails,
  fetchActorMovies,
  imageW342,
} from "../api/themoviedb";
import Loading from "../components/loading";

interface PersonScreenProps {
  route: RouteProp<RootStackParamList, "Person">;
}
const PersonScreen: React.FC<PersonScreenProps> = ({ route }) => {
  const { person } = route.params;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [actor, setActor] = useState<Person>();

  useEffect(() => {
    getActorDetails(person.id);
    getActorMovies(person.id);
  }, []);

  const getActorDetails = async (actorId: number) => {
    const data = await fetchActorDetails(actorId);
    setActor(data);
    setLoading(false);
  };

  const getActorMovies = async (actorId: number) => {
    const data = await fetchActorMovies(actorId);
    setMovies(data.cast);
  };

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back and Fav Button */}
      <TopButtons />
      {/* Person Details */}
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <View className="items-center overflow-hidden border-2 rounded-full h-72 w-72 border-neutral-400">
              <Image
                source={{
                  uri: imageW342(actor?.profile_path) || fallBackPersonPoster,
                }}
                style={{ width: globalWidth(70), height: globalHeight(45) }}
              />
            </View>
          </View>

          {/* Name */}
          <View className="mt-6">
            <Text className="text-3xl font-bold text-center text-white">
              {person.original_name}
            </Text>
            <Text className="text-base text-center text-neutral-500">
              {actor?.place_of_birth}
            </Text>
          </View>
          <View className="flex-row items-center justify-between p-2 mx-3 mt-3 rounded-full bg-neutral-700">
            <View className="items-center px-2 border-r-2 border-r-neutral-400">
              <Text className="font-semibold text-white">Gender</Text>
              <Text className="text-sm text-neutral-300">
                {actor?.gender === 1 ? "Female" : "Male"}
              </Text>
            </View>
            <View className="items-center px-2 border-r-2 border-r-neutral-400">
              <Text className="font-semibold text-white">Birthday</Text>
              <Text className="text-sm text-neutral-300">
                {actor?.birthday}
              </Text>
            </View>
            <View className="items-center px-2 border-r-2 border-r-neutral-400">
              <Text className="font-semibold text-white">Known for</Text>
              <Text className="text-sm text-neutral-300">
                {actor?.known_for_department}
              </Text>
            </View>
            <View className="items-center px-2 ">
              <Text className="font-semibold text-white">Popularity</Text>
              <Text className="text-sm text-neutral-300">{`${actor?.popularity.toFixed(
                1
              )}%`}</Text>
            </View>
          </View>
          <View className="mx-4 my-6 space-y-2">
            <Text className="text-lg text-white">Biography</Text>
            <Text className="tracking-wide text-neutral-400">
              {actor?.biography ?? "N/A"}
            </Text>
          </View>

          {/* Movies featured */}
          {movies.length > 0 && <MovieList title="Movies" Movies={movies} />}
        </View>
      )}
    </ScrollView>
  );
};
export default PersonScreen;
