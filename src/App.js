import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Login from './screens.js/Login.screens';
import Dashboard from './screens.js/Dashboard.screen'
import Caterory from './screens.js/Caterory.screen'
import AddCategory from './screens.js/AddCategory.screens'
import EditCategory from './screens.js/EditCategory.screen'
import Brands from './screens.js/Brands.screen';
import CreateBrands from './screens.js/CreateBrands.screen';
import EditBrand from './screens.js/EditBrand.screen';
import Profile from './screens.js/Profile.screens';

const App = () => {
  const [value, setValue] = useState('Hello React');

  const handleChange = event => setValue(event.target.value);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/categories">
          <Caterory />
        </Route>
        <Route path="/categories/addCategory">
          <AddCategory />
        </Route>
        <Route path="/categories/:id/edit">
          <EditCategory />
        </Route>
        <Route exact path="/brands">
          <Brands />
        </Route>
        <Route exact path="/brands/create-brand">
          <CreateBrands />
        </Route>
        <Route exact path="/brands/:id/edit">
          <EditBrand />
        </Route>
      </Switch>
    </div>
  );
};

export default App;