import { StackNavigationProp } from "@react-navigation/stack";

export interface Movie {
  id: number;
  title: string;
  backdrop_path: "/1syW9SNna38rSl9fnXwc9fP7POW.jpg";
  poster_path: "/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg";
  popularity?: number;
  overview?: string;
  original_title?: string;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
}

export type Person = {
  adult: boolean;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  place_of_birth?: string;
  birthday?: string;
  gender?: number;
  biography?: string;
};

export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
  Search: undefined;
  Person: { person: Person };
  Movie: { movie: Movie };
  // Define other screens and their parameters
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;
