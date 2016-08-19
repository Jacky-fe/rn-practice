import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import LocalStorageDemo from '../Containers/LocalStorageDemo'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper'hideNavBar={false}  navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='presentationScreen' component={PresentationScreen} hideNavBar/>
            <Scene key='componentExamples' hideNavBar={false} component={AllComponentsScreen} title='Components' />
            <Scene key='usageExamples'hideNavBar={false}  component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='listviewExample' hideNavBar={false}  component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' hideNavBar={false}  component={ListviewGridExample} title='Listview Grid' />
            <Scene key='mapviewExample' hideNavBar={false} component={MapviewExample} title='Mapview Example' />
            <Scene key='apiTesting' hideNavBar={false} component={APITestingScreen} title='API Testing' />
            <Scene key='theme' hideNavBar={false} component={ThemeScreen} title='Theme' />
            <Scene key='deviceInfo' hideNavBar={false} component={DeviceInfoScreen} title='Device Info' />
            <Scene key='localStorageDemo' hideNavBar={false} component={LocalStorageDemo} title='Local Storage Demo' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
