import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import Lists from '../screens/Goods/Lists';
import Forms from '../screens/Goods/Forms/Forms';
import MapPicker from '../screens/Goods/Forms/MapPicker';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const GoodStack = createStackNavigator();

export default class GoodStackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedata: ['Developer', 'Designer', 'Product Manager'],
      userToken: 'null',
    };
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <GoodStack.Navigator
          initialRouteName="Lists"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2c3d70',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}>
          {this.state.userToken === null ? (
            <>
              <GoodStack.Screen
                name="Signin"
                component={Signin}
                options={{title: 'Signin'}}
              />
              <GoodStack.Screen
                name="Signup"
                component={Signup}
                options={{title: 'Signup'}}
              />
            </>
          ) : (
            <>
              <GoodStack.Screen
                name="Lists"
                component={Lists}
                options={{title: 'My Goods'}}
              />
              <GoodStack.Screen
                name="Forms"
                component={Forms}
                options={{title: 'New Goods'}}
              />
              <GoodStack.Screen
                name="MapPicker"
                component={MapPicker}
                options={{title: 'New Goods', headerBackTitle: ' '}}
              />
            </>
          )}
        </GoodStack.Navigator>
      </ApplicationProvider>
    );
  }
}
