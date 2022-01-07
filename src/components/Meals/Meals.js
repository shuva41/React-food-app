import { Fragment } from 'react/cjs/react.production.min';

import MealSummary from './MealSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
