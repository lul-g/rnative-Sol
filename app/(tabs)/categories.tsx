import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Logo from '@/components/Logo';

const Categories = () => {
  return (
    <SafeAreaView className="h-full p-2">
      <View className="flex-row items-center justify-between mt-8 px-2">
        <Logo />
        <Text className="font-semibold">Apr 28 - May 04</Text>
      </View>
      <View className="mx-2 p-2 rounded-lg border w-100 mt-8">
        <Text className="text-xl font-psemibold">Net</Text>
        <Text className="text-sm font-pregular text-red-400">$1300</Text>
      </View>
      <View className="gap-y-4 mb-0">
        <View className="gap-2 p-2 flex-row flex-wrap items-start">
          <View className="p-2 rounded-lg border">
            <Text className="text-xl font-psemibold">Total Income</Text>
            <Text className="text-sm font-pregular text-blue-400">$2500</Text>
          </View>
          <View className="p-2 rounded-lg border">
            <Text className="text-xl font-psemibold">Total Expenses</Text>
            <Text className="text-sm font-pregular text-red-400">$1300</Text>
          </View>
        </View>
      </View>
      <View className="p-2 rounded-lg border w-100 mx-2 mb-2">
        <Text className="text-xl font-psemibold">Total Savings</Text>
        <Text className="text-sm font-pregular text-emerald-400">$1300</Text>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
