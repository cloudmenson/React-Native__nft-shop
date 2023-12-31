import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeTitle, FocusedStatusBar } from "../components";

export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeTitle />}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <NFTCard data={item} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};
