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
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import Actions from '../Actions/LocalStorageDemoActions'
import {Images, Metrics} from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'

// I18n
import I18n from '../I18n/I18n.js'

class LoginScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      key: 'testkey',
      value: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.attempting) {
      this.props.close()
    }
  }

  handlePressSave = () => {
    const { key, value } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptSave(key, value)
  }

  handlePressLoad = () => {
    const { key, value } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    const value = this.props.attemptLoad(key)
    this.setState({value: value})
  }

  handleChangeKey = (text) => {
    this.setState({ key: text })
  }

  handleChangeValue = (text) => {
    this.setState({ value: text })
  }

  render () {
    const { username, password } = this.state
    const { attempting } = this.props
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
              secureTextEntry
              onChangeText={this.handleChangeValue}
              underlineColorAndroid='transparent'
              onSubmitEditing={this.handlePressLogin}
              placeholder='请输入value' />
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressSave}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Save</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.props.handlePressLoad}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Load</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    )
  }

}

LoginScreen.propTypes = {
  dispatch: PropTypes.func,
  attempting: PropTypes.bool,
  close: PropTypes.func,
  attemptSave: PropTypes.func,
  attemptLoad: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    attempting: state.login.attempting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: NavigationActions.pop,
    attemptSave: (key, value) => dispatch(Actions.attemptSave(key, value)),
    attemptLoad: (key) => dispatch(Actions.attemptLoad(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
