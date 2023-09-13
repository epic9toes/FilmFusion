import { StackNavigationProp } from "@react-navigation/stack";

export interface Movie {
  id: number;
  name?: string;
  year?: string;
  title?: string;
}

export type Person = {
  id: number;
  name?: string;
};

export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
  Person: { person: Person };
  Movie: { movie: Movie };
  // Define other screens and their parameters
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;
