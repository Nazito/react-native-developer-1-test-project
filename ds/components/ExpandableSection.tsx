import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, LayoutAnimation } from 'react-native'
import { Entypo } from '@expo/vector-icons'

type ExpandableSectionProps = {
  title: string
  children: React.ReactNode
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<View>(null)

  const [animation] = useState(new Animated.Value(0))
  const [iconRotation] = useState(new Animated.Value(0))
  const measureContentHeight = () => {
    if (contentRef.current) {
      contentRef.current.measure((x, y, width, height) => {
        setContentHeight(height)
      })
    }
  }

  useEffect(() => {
    measureContentHeight()
  }, [])

  useEffect(() => {
    if (collapsed) {
      Animated.timing(iconRotation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(iconRotation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }).start()
    }
  }, [collapsed])

  const toggleCollapsed = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start()
    }
    setCollapsed(prev => !prev)
  }

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight]
  })

  const iconRotationInterpolate = iconRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapsed} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: iconRotationInterpolate }] }}>
          <Entypo name='chevron-thin-down' size={16} color='rgba(255, 255, 255, 1)' />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.animatedContent, { height: heightInterpolate }]}>
        <View ref={contentRef} onLayout={measureContentHeight} style={styles.content}>
          {children}
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'rgba(163, 173, 200, 0.08)',
    borderRadius: 16,
    overflow: 'hidden'
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)'
  },
  animatedContent: {
    overflow: 'hidden'
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: 5
  }
})

export default ExpandableSection
