import { TouchableOpacity, View, Text } from 'react-native';

export const CategoryIcon = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="bg-red-500 items-center justify-center rounded-full p-2 w-12 h-12 relative"
    >
      {/* <View className="absolute w-6 h-6 p-1 rounded-full bg-white right-0 -bottom-3">
        <Text className="text-sm">✒️</Text>
      </View> */}
      <Text className="text-lg">🥑</Text>
    </TouchableOpacity>
  );
};
