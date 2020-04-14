import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListsCourse from './lists/ListsCourse';
import CategoriesCourse from './categories/CategoriesCourse';

const ContainerCourses: React.FC<any> = () => {
  return (
    <Switch>
      <Route path="/courses" exact={true} component={ListsCourse} />
      <Route
        path="/courses/categories"
        exact={true}
        component={CategoriesCourse}
      />
    </Switch>
  );
};

export default ContainerCourses;
