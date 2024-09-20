import { Image, StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import MlkitOcr from 'react-native-mlkit-ocr';

const uri = 'https://media-cdn.tripadvisor.com/media/photo-s/12/0f/07/a6/restaurant-invoice-2.jpg';

export default function HomeScreen() {
  useEffect(() => {
    (async function test() {
      console.log('Start testing');
      try {
        const resultFromUri = await MlkitOcr.detectFromUri(uri);
        const textBlocks = resultFromUri.map(block => block.text).join('\n');

        // Log the entire text for debugging
        console.log("Extracted Text:", textBlocks);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />
      <Text style={styles.extractedText}>Extracted Text:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  extractedText: {
    fontSize: 16,
    marginVertical: 8,
  },
})