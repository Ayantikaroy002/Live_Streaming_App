import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import Layout from './src/navigation/layout';

export default function App() {
  return (<NavigationContainer >
    <Layout/>
  </NavigationContainer>);
}