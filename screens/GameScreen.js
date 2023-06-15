import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const GameScreen = ({}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Text>LogRounds</Text>
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
