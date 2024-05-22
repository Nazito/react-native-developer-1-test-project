import { StatusBar } from 'expo-status-bar'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { colors } from './ds/colors'
import ExpandableSection from './ds/components/ExpandableSection'
import Tag from './ds/components/Tag'
import { Text } from './ds/components/Text'

export const Screen1: React.FC<{}> = () => {
  const insets = useSafeAreaInsets()

  const tags = [
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' },
    { text: 'tag' }
  ]

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.surface.primary
      }}
    >
      <StatusBar style='light' />
      <ScrollView
        style={{
          flex: 1
        }}
        alwaysBounceVertical={false}
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        }}
      >
        <ExpandableSection title='Section 1'>
          {tags.map((tag, index) => {
            return (
              <Tag
                key={index}
                text={`${tag.text} ${index}`}
                onPress={() => alert(`Tag ${index} pressed`)}
              />
            )
          })}
        </ExpandableSection>
      </ScrollView>
    </View>
  )
}
