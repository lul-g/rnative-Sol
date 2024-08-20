import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import CategoryEdit from '@/components/CategoryEdit';

export default function Budget() {
  return (
    <SafeAreaView className="p-4 mt-10 items-center">
      <Text>budget</Text>
      {/* <CategoryEdit
        name={'Grocery'}
        amount={500}
        type={'expense'}
        period={'weekly'}
      /> */}
    </SafeAreaView>
  );
}
