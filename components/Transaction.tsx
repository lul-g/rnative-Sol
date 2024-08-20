import { View, Text } from 'react-native';
import React from 'react';
import { CategoryIcon } from './CategoryIcon';

const Transaction = () => {
  return (
    <View className="flex-row justify-between items-center ">
      <View className="flex-row space-x-2">
        <CategoryIcon />
        <View className="justify-center">
          <Text className="text-lg font-psemibold leading-6">food</Text>
          <Text className="capitalize text-gray-400 font-pregular leading-4">
            grocery
          </Text>
        </View>
      </View>
      <View>
        <Text className="text-lg font-pbold text-red-600">- $25</Text>
      </View>
    </View>
  );
};

export default Transaction;
