import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Person, RootStackNavigationProp } from "app/navigation/types";
import { useNavigation } from "@react-navigation/native";

interface CastProps {
  cast: Person[];
}

const Cast: React.FC<CastProps> = ({ cast }) => {
  const navigation = useNavigation<RootStackNavigationProp<"Person">>();
  return (
    <View className="my-6">
      <Text className="mx-4 mb-5 text-lg text-white">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast?.map((person, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Person", { person })}
              key={index}
              className="items-center mr-4"
            >
              {/* Image */}
              <View className="items-center w-20 h-20 overflow-hidden border rounded-full border-neutral-500">
                <Image
                  source={require("../assets/images/artist.jpg")}
                  className="w-20 h-24 rounded-2xl"
                />
              </View>
              {/* Character Name */}
              <Text className="mt-1 text-xs text-white">John Wick</Text>
              {/* Person Name */}
              <Text className="mt-1 text-xs text-neutral-400">
                Keanu Reeves
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Cast;
