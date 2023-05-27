import React from 'react';
import { View, Text } from 'react-native';

const Autenticado = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Autenticação bem-sucedida!
      </Text>
    </View>
  );
};

export default Autenticado;
