// src/types/navigationTypes.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  DoarScreen: undefined;
  PublicarScreen: undefined;
};

export type AppNavigationProp = StackNavigationProp<RootStackParamList>;
