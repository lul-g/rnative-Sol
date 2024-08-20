import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { Tabs, useNavigation, usePathname } from 'expo-router';
import { Image } from 'react-native';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, focused }: any) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      {/* <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text> */}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="budget"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.homeDollar} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.cash} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.pie} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
