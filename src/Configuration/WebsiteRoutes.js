import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import AvailableDevicePage from '../Components/AvailableDevicePage'
import ComparePage from '../Components/ComparePage'


const WebsiteRoutes = () => (
  <Switch>
    <Route exact path='/' component={AvailableDevicePage} />
    <Route exact path='/reserve' component={ComparePage} />
  </Switch>
)

export default WebsiteRoutes