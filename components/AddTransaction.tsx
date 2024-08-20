import { View, Text, TouchableOpacity } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetView,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';

const AddTransaction = () => {
  const [transactions, setTransactions] = useState([
    { name: '', amount: '', type: '' },
  ]); // {name: amount: type }
  const [balance, setBalance] = useState({
    net: 0,
    income: 0,
    expenses: 0,
    savings: 0,
  });
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '95%'], []);

  function createTransaction() {
    handleDismissModalPress();
    setTransactions((prev: any[]) => {
      return [...prev, { name: name, amount: amount, type: type }];
    });
  }
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheetModalProvider>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePresentModalPress}
          className="bg-slate-800 rounded-lg p-4 mx-2"
        >
          <Text className="font-psemibold text-lg text-slate-200 text-center">
            Transaction
          </Text>
        </TouchableOpacity>
        <BottomSheetModal
          enableDismissOnClose
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.sheet}>
            <View className="gap-2 flex-col">
              <Text className="font-semibold text-lg">Title</Text>
              <BottomSheetTextInput
                onChangeText={(val: string) => {
                  setName(val);
                }}
                value={name}
                style={styles.input}
              />
            </View>
            <View className="gap-2 flex-col">
              <Text className="font-semibold text-lg">Amount</Text>
              <BottomSheetTextInput
                onChangeText={(val: string) => {
                  setAmount(val);
                }}
                value={amount}
                style={styles.input}
              />
            </View>
            <View className="gap-2 flex-col">
              <Text className="font-semibold text-lg">Type</Text>
              <BottomSheetTextInput
                onChangeText={(val: string) => {
                  setType(val);
                }}
                value={type}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={createTransaction}
              className="bg-slate-800 rounded-lg p-4"
            >
              <Text className="font-psemibold text-lg text-slate-200 text-center">
                Add Transaction
              </Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

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

export default AddTransaction;
