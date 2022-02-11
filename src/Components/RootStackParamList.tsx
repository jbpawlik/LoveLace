declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string, screen: any, params: any };
  Dashboard: {userId: string, screen: any, params: any };
  ResetPasswordScreen: { userId?: string, screen: any, params: any};
  StartScreen: { userId: string, screen: any, params: any };
  LoginScreen: { userId?: string, screen: any, params: any} ;
  RegisterScreen: { userId: string }
  Feed: { sort: 'latest' | 'top' } | undefined;
  onPress(): void;
};