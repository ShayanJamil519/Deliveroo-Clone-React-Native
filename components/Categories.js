import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      <CategoryCard
        imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://avatars.githubusercontent.com/u/76084810?s=96&v=4"
        title="Testing"
      />
    </ScrollView>
  );
};

export default Categories;
