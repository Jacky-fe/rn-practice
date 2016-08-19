import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  mainContainer: {
    flex: 1,
    marginTop: 0,
    backgroundColor: Colors.transparent
  },
  centered: {
    alignItems: 'center'
  }
})
