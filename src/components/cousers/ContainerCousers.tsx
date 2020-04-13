import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import ListsCouser from './lists/ListsCouser';
import CategoriesCouser from './categories/CategoriesCouser';
import { connect } from 'react-redux';
import * as couserAction from '../../store/actions/couserActions';

function ContainerCousers() {
  return (
    <Switch>
      <Route path="/cousers" exact={true} component={ListsCouser} />
      <Route
        path="/cousers/categories"
        exact={true}
        component={CategoriesCouser}
      />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    cousers: state.couserReducer,
  };
};

export default connect(mapStateToProps, couserAction)(ContainerCousers);
