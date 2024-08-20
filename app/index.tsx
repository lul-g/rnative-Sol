import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';

//welcom screen adn then redirect
const index = () => {
  return <Redirect href="/budget" />;
};

export default index;

const styles = StyleSheet.create({});
