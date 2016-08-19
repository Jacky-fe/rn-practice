import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  Alert,
  requireNativeComponent,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LocalStorageDemoStyle'
import Actions from '../Actions/LocalStorageDemoActions'
import {Images, Metrics} from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Video from 'react-native-video'
// I18n
import I18n from '../I18n/I18n.js'
const iface = {
  name: 'MyButton',
  propTypes: {
    text: PropTypes.string,
    onPress: PropTypes.func,
    clickable: PropTypes.bool,
    ...View.propTypes // 包含默认的View的属性
  },
};

const MyButton = requireNativeComponent('MyButton', iface);
class LocalStorageDemo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
      key: '',
      value: '',
      attempting: false
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      key: newProps.myKey,
      value: newProps.value,
      attempting: newProps.attempting
    });
    this.forceUpdate()
   
  }

  handlePressSave = () => {
    const { key, value } = this.state
    const localStorage = require('react-native').NativeModules.LocalStorage
    this.props.attemptSave(key, value)
  }

  handlePressLoad = async () => {
    const { key } = this.state
    this.props.attemptLoad(key)
  }

  handleChangeKey = (text) => {
    this.setState({ key: text })
  }

  handleChangeValue = (text) => {
    this.setState({ value: text })
  }

  handlePressDemoButton = () => {
    alert('123')
  }

  render () {
    let { key, value, attempting } = {...this.state}

    const editable = !attempting
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]}>
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>key:</Text>
            <TextInput
              ref='key'
              style={textInputStyle}
              value={key}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              onChangeText={this.handleChangeKey}
              underlineColorAndroid='transparent'
              placeholder='请输入key' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>value</Text>
            <TextInput
              ref='value'
              style={textInputStyle}
              value={value}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              onChangeText={this.handleChangeValue}
              underlineColorAndroid='transparent'
              placeholder='请输入value' />
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressSave}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Save</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLoad}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Load</Text>
                
              </View>
            </TouchableOpacity>
          </View>
<MyButton text='My Button' _onPress={this.handlePressDemoButton} style={buttonStyles.myButton} onPress={this.handlePressDemoButton}></MyButton>
 
        </View>
          
       
      </ScrollView>
    )
  }

}

LocalStorageDemo.propTypes = {
  dispatch: PropTypes.func,
  attempting: PropTypes.bool,
  attemptSave: PropTypes.func,
  attemptLoad: PropTypes.func,
  myKey: PropTypes.string,
  value: PropTypes.string
}

const mapStateToProps = (state) => {
  const ret = {
    attempting: state.localStorage.attempting,
    myKey: state.localStorage.key,
    value: state.localStorage.value
  }
  return ret
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptSave: (key, value) => dispatch(Actions.attemptSave(key, value)),
    attemptLoad: (key) => dispatch(Actions.attemptLoad(key))
  }
}

// Later on in your styles..
const buttonStyles = StyleSheet.create({
  myButton: {
    // top: 100,
    flex: 1,
    width: 200,
    height: 50
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalStorageDemo)
