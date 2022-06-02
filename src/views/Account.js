import React, { component } from "react";
import { View, Text } from "react-native";

const Account = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Trendz Online Store</Text>
        navigation.navigate("Account")
      </View>
      <View></View>
    </View>
  );
};

export default Account;