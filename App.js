import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera'

const App = () => {
  const [canDetectText, setCanDetectText] = React.useState(true)
  const [textBlock, setTextBlock] = React.useState([])
  const camRef = React.useRef(null)

  function textRecognized(obj) {
    const data = obj
    setTextBlock(data)
    console.log(data)
  }

  function renderTextBlocks() {
    return (
      <View style={styles.facesContainer} pointerEvents="none">
        {
          <Text>Test</Text>
        }
      </View>
    )
  }

  function renderCamera() {
    return (
      <RNCamera
        ref={camRef}
        style={{ flex: 1, }}
        trackingEnabled
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onTextRecognized={(res) => canDetectText ? textRecognized(res) : null}
      >
        {!!canDetectText && renderTextBlocks()}
      </RNCamera>
    )
  }

  return (
    <View style={styles.container}>
      {renderCamera()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
