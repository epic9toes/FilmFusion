import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { Movie, RootStackNavigationProp } from "app/navigation/types";
import { globalHeight, globalWidth } from "../constants";
import AnimatedLottieView from "lottie-react-native";
import { debounce } from "lodash";
import {
  fallBackMoviePoster,
  imageW185,
  searchMovies,
} from "../api/themoviedb";
import Loading from "../components/loading";

export default function SearchScreen() {
  const [results, setResults] = useState<Movie[]>([]);
  const navigation = useNavigation<RootStackNavigationProp<"Movie" | "Home">>();
  const [loading, setLoading] = useState<boolean>(false);
  // Function to navigate to the "Movie" screen with a selected movie object
  const handleClick = (selectedMovie: Movie) => {
    navigation.navigate("Movie", { movie: selectedMovie });
  };

  const handleSearch = (text: string) => {
    if (text) {
      setLoading(true);
      searchMovies({
        query: text,
        include_adult: "false",
        language: "en-US",
        page: "1",
      }).then((data) => {
        setLoading(false);
        if (data.results) setResults(data.results);
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="flex-row items-center justify-between mx-4 mb-3 border rounded-full border-neutral-500">
        <TextInput
          onChangeText={handleTextDebounce}
          className="flex-1 pb-1 pl-6 text-base font-semibold tracking-wider text-white"
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
        />
        {/* Back Buttton */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-3 m-1 rounded-full bg-neutral-500"
        >
          <XMarkIcon size={28} strokeWidth={2.5} color={"white"} />
        </TouchableOpacity>
      </View>
      {/* Results */}
      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="ml-1 font-semibold text-white">
            Results ({results.length})
          </Text>
          {/* Result Objs */}
          <View className="flex-row flex-wrap justify-between">
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => handleClick(item)}
                  key={index}
                >
                  <View className="mb-4 space-y-2">
                    <Image
                      className="rounded-3xl"
                      source={{
                        uri: imageW185(item.poster_path) || fallBackMoviePoster,
                      }}
                      style={{
                        width: globalWidth(44),
                        height: globalHeight(30),
                      }}
                    />
                    <Text
                      style={{ width: globalWidth(40) }}
                      className="ml-1 text-neutral-300"
                      numberOfLines={1}
                    >
                      {item.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="items-center justify-center flex-1">
          <AnimatedLottieView
            style={{
              height: globalHeight(40),
              width: globalWidth(80),
            }}
            source={require("../assets/animations/5.json")}
            autoPlay
            loop
          />
        </View>
      )}
    </SafeAreaView>
  );
}
