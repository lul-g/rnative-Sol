import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Category } from '@/constants/types';
import { SelectList } from 'react-native-dropdown-select-list';
import { icons } from '@/constants';
import { CategoryIcon } from './CategoryIcon';

const CategoryEdit = ({ name, amount, type, period }: Category) => {
  const [category, setCategory] = useState<Category>({
    name: name,
    amount: 0,
    type: 'expense',
    period: 'weekly',
  });
  const [selected, setSelected] = React.useState('');

  return (
    <View className="border border-gray-300 p-2 rounded-xl w-full">
      <View className="flex-row space-x-2">
        <CategoryIcon />
        <View>
          <View className="flex-row space-x-2 mb-2">
            <TextInput
              className="rounded-xl bg-gray-300/50 p-2 active:bg-gray-300 focus:bg-gray-300/60 font-semibold text-lg w-2/3"
              onChangeText={(val: string) => {
                setCategory((prev) => ({ ...prev, name: val }));
              }}
              value={category.name}
              placeholder="Groceries"
              autoCapitalize="words"
            />
            <View className="flex-row items-center space-x-2 bg-gray-300/50 active:bg-gray-300 focus:bg-gray-300 rounded-xl p-2">
              <Text className="font-bold text-xl text-gray-400">$</Text>
              <TextInput
                className="font-semibold text-lg"
                onChangeText={(val: string) => {
                  setCategory((prev) => ({ ...prev, amount: parseInt(val) }));
                }}
                value={category.amount.toString()}
                placeholder="150"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View className="flex-row space-x-2">
            <SelectList
              boxStyles={{
                width: 182,
                borderColor: 'transparent',
                backgroundColor: '#E9E9EB',
              }}
              inputStyles={{ fontWeight: 'bold', fontSize: 16 }}
              dropdownStyles={{
                width: 182,
                borderColor: 'transparent',
                backgroundColor: '#E9E9EB',
              }}
              defaultOption={{ key: '1', value: 'Expense' }}
              setSelected={(val: string) => setSelected(val)}
              data={[
                { key: 1, value: 'Expense' },
                { key: 1, value: 'Savings' },
              ]}
              save="value"
            />
            <TouchableOpacity
              className="bg-gray-300/50 p-2 rounded-xl items-center justify-center flex"
              activeOpacity={0.8}
            >
              <Text>🔴</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CategoryEdit;
