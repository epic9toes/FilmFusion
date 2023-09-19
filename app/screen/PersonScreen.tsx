import { View, Image, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import TopButtons from "../components/topButtons";
import { globalHeight, globalWidth } from "../constants";
import MovieList from "../components/movieList";
import { Movie } from "../navigation/types";

export default function PersonScreen() {
  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, name: "The Flying Dragon" },
    { id: 1, name: "Shining Amour" },
    { id: 1, name: "The Offer" },
  ]);
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back and Fav Button */}
      <TopButtons />
      {/* Person Details */}
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
              source={require("../assets/images/artist.jpg")}
              style={{ width: globalWidth(70), height: globalHeight(45) }}
            />
          </View>
        </View>

        {/* Name */}
        <View className="mt-6">
          <Text className="text-3xl font-bold text-center text-white">
            Okonkwor Chukwuaurka
          </Text>
          <Text className="text-base text-center text-neutral-500">
            United Kingdom
          </Text>
        </View>
        <View className="flex-row items-center justify-between p-2 mx-3 mt-3 rounded-full bg-neutral-700">
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white">Gender</Text>
            <Text className="text-sm text-neutral-300">Male</Text>
          </View>
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white">Birthday</Text>
            <Text className="text-sm text-neutral-300">1964-03-10</Text>
          </View>
          <View className="items-center px-2 border-r-2 border-r-neutral-400">
            <Text className="font-semibold text-white">Known for</Text>
            <Text className="text-sm text-neutral-300">Acting</Text>
          </View>
          <View className="items-center px-2 ">
            <Text className="font-semibold text-white">Popularity</Text>
            <Text className="text-sm text-neutral-300">69%</Text>
          </View>
        </View>
        <View className="mx-4 my-6 space-y-2">
          <Text className="text-lg text-white">Biography</Text>
          <Text className="tracking-wide text-neutral-400">
            @ryantasie and @thegirlcoder were instrumental to the decision to
            enroll. Their contents on twitter and work around blockchain system
            are commendable. I am particularly grateful for the open source
            information and accessibility. @haardikkk a senior developer for
            learnweb3 assisted me in debugging some of the codes. He is totally
            approachable and resourceful. If you are new to the web3 space, I
            triple recommend you follow them. Shout out to the team at
            learnweb3.io and Thank y'all for the NFTs airdrops on the completion
            of each track. NB: I can't find the mentioned persons on facebook so
            you might want to check twitter. Onwards to learn and earn.
            #developer #opensource #blockchain #team #work #grateful
            #web3education #cadence #celo #celodev
          </Text>
        </View>

        {/* Movies featured */}
        <MovieList title="Movies" Movies={movies} />
      </View>
    </ScrollView>
  );
}
