import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";

const FeatureRow = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* Resturant Cards */}

        <ResturantCard
          key="{restaurant._id}"
          id="{restaurant._id}"
          imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
          title="Sushi"
          rating="{restaurant.rating}"
          genre="{restaurant.type?.name}"
          address="{restaurant.address}"
          short_description="{restaurant.short_description}"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          key="{restaurant._id1}"
          id="{restaurant._id1}"
          imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
          title="Sushi"
          rating="{restaurant.rating}"
          genre="{restaurant.type?.name}"
          address="{restaurant.address}"
          short_description="{restaurant.short_description}"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          key="{restaurant._id2}"
          id="{restaurant._id2}"
          imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
          title="Sushi"
          rating="{restaurant.rating}"
          genre="{restaurant.type?.name}"
          address="{restaurant.address}"
          short_description="{restaurant.short_description}"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          key="{restaurant._id3}"
          id="{restaurant._id3}"
          imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
          title="Sushi"
          rating="{restaurant.rating}"
          genre="{restaurant.type?.name}"
          address="{restaurant.address}"
          short_description="{restaurant.short_description}"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
