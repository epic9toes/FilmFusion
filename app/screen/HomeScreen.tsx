import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
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
import Loading from "../components/loading";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../api/themoviedb";

export default function HomeScreen() {
  const navigation =
    useNavigation<RootStackNavigationProp<"Onboarding" | "Search">>();
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleAsyncReset = async () => {
    await removeItem(AsyncKey);
    navigation.push("Onboarding");
  };
  const ios = Platform.OS == "ios";

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();

    return () => {};
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data?.results) {
      setTrendingMovies(data.results);
      setLoading(false);
    }
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data?.results) {
      setUpcoming(data.results);
    }
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data?.results) {
      setTopRated(data.results);
    }
  };

  return (
    <View className="flex-1 pt-2 bg-neutral-800">
      {/* Search Bar and Logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row items-center justify-between mx-4">
          <TouchableWithoutFeedback onPress={handleAsyncReset}>
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color={"white"} />
          </TouchableWithoutFeedback>
          <Text className="text-2xl font-bold text-white">
            <Text className="text-3xl font-extrabold text-yellow-500">F</Text>
            ilm
            <Text className="text-3xl font-extrabold text-red-500">F</Text>
            usion
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Trending Movies  Carousel */}
          {trendingMovies.length > 0 && (
            <TrendingMovies Movies={trendingMovies} />
          )}
          {/* Upcoming Movie List */}
          {upcoming.length > 0 && (
            <MovieList seeAll={true} title="Upcoming" Movies={upcoming} />
          )}
          {/* Top rated movies */}
          {topRated.length > 0 && (
            <MovieList seeAll={true} title="Top Rated" Movies={topRated} />
          )}
        </ScrollView>
      )}
    </View>
  );
}
