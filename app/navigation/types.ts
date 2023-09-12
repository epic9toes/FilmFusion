import { StackNavigationProp } from "@react-navigation/stack";

export interface Movie {
  id: number;
  name?: string;
  year?: string;
  title?: string;
}
export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
  Movie: { movie: Movie };
  // Define other screens and their parameters
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;
