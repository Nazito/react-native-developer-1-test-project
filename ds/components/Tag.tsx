import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

type TagProps = {
  text: string
  onPress: () => void
}

const Tag: React.FC<TagProps> = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.tagContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    alignSelf: 'flex-start',
    overflow: 'hidden'
  },
  text: {
    color: '#fff',
    fontSize: 14
  }
})

export default Tag
