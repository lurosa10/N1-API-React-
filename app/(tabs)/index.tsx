import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function TabOneScreen() {
  const [dogImage, setDogImage] = useState<string | null>(null);

  const getDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🐶 au au 🐶</Text>

      {dogImage ? (
        <Image source={{ uri: dogImage }} style={styles.image} />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}

      <TouchableOpacity style={styles.button} onPress={getDog}>
        <Text style={styles.buttonText}>Clique para ver outro cachorro</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ADD8E6",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
