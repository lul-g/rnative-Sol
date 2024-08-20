import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  StatusBar,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Logo from '@/components/Logo';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import AddTransaction from '../../components/AddTransaction';
import Transaction from '@/components/Transaction';

export default function Transactions() {
  const [transactions, setTransactions] = useState([
    { name: '', amount: '', type: '' },
  ]);
  return (
    <SafeAreaView className="h-full p-4 mt-8">
      <StatusBar backgroundColor="#000"></StatusBar>

      <View className="flex-row justify-between items-end">
        <Text className="font-psemibold text-3xl">Transactions</Text>
        {/* <Text className="text-purple-600 font-psemibold text-lg">
          Aug, 2024
        </Text> */}
      </View>
      <View className="my-4">
        <Transaction />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: 'black',
  },
  sheet: {
    flex: 1,
    padding: 24,
  },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
  },
});
