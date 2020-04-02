import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import AvailableDevicePage from '../Components/AvailableDevicePage'
import ReservePage from '../Components/ReservePage'


const WebsiteRoutes = () => (
  <Switch>
    <Route exact path='/' component={AvailableDevicePage} />
    <Route exact path='/reserve' component={ReservePage} />
  </Switch>
)

export default WebsiteRoutes