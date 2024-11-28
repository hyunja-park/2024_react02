
import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch(action.type) {
      case 'deposit':
        return state + action.payload;
      case 'withdrawal':
        return state - action.payload;
  }
}


function ReducerTest03(props) {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

    return (
      <div>
          <h2>건이 은행에 오신것을 환영합니다.</h2>
          <p> 잔고 : {money} </p>
          <input type='number'
              value={number}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                setNumber(value < 0 ? 0 : value);
            }}
            step="1000"
        />
        <button onClick={() => {
            dispatch({ type: 'deposit', patload: number});
            setNumber(0);
        }}>예금</button>

        <button onClick={() => {
          if(number > money) {
              alert('잔고부족')
          }else{
            dispatch({ type: 'withdrawal', patload: number});
            setNumber(0);
          }
        }}>출금</button>
      </div>
    );
}

export default ReducerTest03;