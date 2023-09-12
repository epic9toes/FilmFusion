import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AsyncKey, removeItem } from "../helpers/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp, Movie } from "../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";

export default function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp<"Onboarding">>();
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([
    { id: 1, name: "mekwa" },
    { id: 1, name: "mekwa" },
    { id: 1, name: "mekwa" },
  ]);
  const [upcoming, setUpcoming] = useState<Movie[]>([
    { id: 1, name: "The Flying Dragon" },
    { id: 1, name: "Shining Amour" },
    { id: 1, name: "The Offer" },
  ]);
  const [topRated, setTopRated] = useState<Movie[]>([
    { id: 1, name: "The Flying Dragon" },
    { id: 1, name: "Shining Amour" },
    { id: 1, name: "The Offer" },
  ]);

  const handleAsyncReset = async () => {
    await removeItem(AsyncKey);
    navigation.push("Onboarding");
  };
  const ios = Platform.OS == "ios";
  return (
    <View className="flex-1 pt-2 bg-neutral-800">
      {/* Search Bar and Logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row items-center justify-between mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color={"white"} />
          <Text className="text-2xl font-bold text-white">
            <Text className="text-3xl font-extrabold text-yellow-500">F</Text>
            ilm
            <Text className="text-3xl font-extrabold text-red-500">F</Text>
            usion
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Movies  Carousel */}
        <TrendingMovies Movies={trendingMovies} />
        {/* Upcoming Movie List */}
        <MovieList title="Upcoming" Movies={upcoming} />
        {/* Top rated movies */}
        <MovieList title="Top Rated" Movies={topRated} />
      </ScrollView>
    </View>
  );
}
