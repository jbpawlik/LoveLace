import { DefaultTheme } from 'react-native-paper'

// Might need to use custom stuff in TypeScript
// declare global {
//   namespace ReactNativePaper {
//     interface ThemeColors {
//       myOwnColor: string;
//     }

//     interface Theme {
//       myOwnProperty: boolean;
//     }
//   }
// }

export const theme = {
  ...DefaultTheme,
  roundness: 30,  
  colors: {
    ...DefaultTheme.colors,
    text: 'black',
    primary: 'red',
    secondary: '#f5f5dc',
    error: '#f13a59',
  },
  // flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
}
