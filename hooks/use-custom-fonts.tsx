import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  let [fontsLoaded] = useFonts({
    'ChakraPetch': require("../fonts/ChakraPetch.ttf"), 
  });
  return fontsLoaded;
}
