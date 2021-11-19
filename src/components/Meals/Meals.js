import React, { Fragment } from 'react';
import AvailbleMeals from './AvailbleMeals';
import MealsSummary from './MealsSummary';

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailbleMeals />
    </Fragment>
  );
};

export default Meals;
