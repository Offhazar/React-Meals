import React, { useReducer } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import { useRef, useState } from 'react/cjs/react.development';

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amountValid, setAmountValid] = useState(true);

  const sumbutHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;

    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={sumbutHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
