import Card from '../UI/Card';
import classes from './AvailbleMeals.module.css';
import MealItem from './MealItem';

const DATA = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailbleMeals = (props) => {
  //   const mealList = DATA.map((item) => {
  //     <MealItem
  //       key={item.id}
  //       name={item.name}
  //       description={item.description}
  //       price={item.price}
  //     />;
  //   });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DATA.map((item) => {
            return (
              <MealItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailbleMeals;
