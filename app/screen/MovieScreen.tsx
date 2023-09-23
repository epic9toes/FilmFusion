import { View, Image, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { Movie, Person, RootStackParamList } from "app/navigation/types";
import { globalHeight, globalWidth } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";
import TopButtons from "../components/topButtons";
import Loading from "../components/loading";
import {
  fallBackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  imageW500,
} from "../api/themoviedb";

type MovieScreenProps = {
  route: RouteProp<RootStackParamList, "Movie">;
};

type Details = {
  adult?: boolean;
  backdrop_path?: string;
  title: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  genres?: [];
  popularity?: number;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
  status?: string;
  runtime: number;
};

const MovieScreen: React.FC<MovieScreenProps> = ({ route }) => {
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [cast, setCast] = useState<Person[]>([]);
  const [movieInfo, setMovieInfo] = useState<Details>();
  const movie = route.params;
  const { id } = route.params.movie;
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    //logic
    setLoading(true);
    getMovieDetails(id);
    getMovieCredits(id);
    getSimilarMovies(id);
  }, [movie]);

  const getMovieDetails = async (id: number) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovieInfo(data);
    setLoading(false);
  };

  const getMovieCredits = async (id: number) => {
    const data = await fetchMovieCredits(id);
    if (data) setCast(data.cast);
  };

  const getSimilarMovies = async (id: number) => {
    const data = await fetchSimilarMovies(id);
    if (data?.results) setSimilarMovies(data.results);
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* Back button and Movie Poster */}
      <View className="w-full">
        <TopButtons extraNativeWindStyle="absolute" />
        {loading ? (
          <View
            className="justify-center "
            style={{ height: globalHeight(40) }}
          >
            <Loading />
          </View>
        ) : (
          <>
            <View>
              <Image
                source={{
                  uri:
                    imageW500(movieInfo?.backdrop_path) || fallBackMoviePoster,
                }}
                style={{ width: globalWidth(100), height: globalHeight(55) }}
              />
              <LinearGradient
                colors={[
                  "transparent",
                  "rgba(23,23,23,0.8)",
                  "rgba(23,23,23,1)",
                ]}
                style={{ width: globalWidth(100), height: globalHeight(40) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
              />
            </View>
            {/* Movie Details */}

            <View
              style={{ marginTop: -globalHeight(0.09) }}
              className="space-y-3"
            >
              <Text className="text-3xl font-bold tracking-wider text-center text-white">
                {movieInfo?.title}
              </Text>
              {/* status, release, runtime */}
              {movieInfo?.title ? (
                <Text className="text-base font-semibold text-center text-neutral-400">
                  {movieInfo?.status} - {movieInfo?.release_date?.split("-")[0]}{" "}
                  - {movieInfo?.runtime}mins
                </Text>
              ) : null}

              {/* Genres */}
              <View className="flex-row justify-center mx-4 space-x-2">
                {movieInfo?.genres?.map((item, index) => {
                  return (
                    <Text
                      key={index}
                      className="text-base font-semibold text-center text-neutral-400"
                    >
                      {item?.name}
                    </Text>
                  );
                })}
              </View>

              {/* Movie Description */}
              <Text className="mx-4 tracking-wide text-neutral-400">
                {movieInfo?.overview}
              </Text>
            </View>
          </>
        )}
      </View>

      {/* Cast Memebers */}
      <Cast cast={cast} />
      {/* Similar Movies */}
      <MovieList title="Similar Movies" Movies={similarMovies} />
    </ScrollView>
  );
};

export default MovieScreen;
