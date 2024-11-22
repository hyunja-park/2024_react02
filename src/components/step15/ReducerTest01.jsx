import React, { useReducer } from 'react';

// useReducer는  React의 상태관리 훅, 복잡한 상태변화를 더 명확하고 예측 가능하게 관리 할 수 있도록 도와 준다.
// 상태관리 로직을 컴포넌트에서 분리하여 코드 가독성을 높인다.

function reducer({state,action}) {
  
}



function ReducerTest01(props) {
  // useReducer(위에 reducer 함수이름, 0 초기값) 
  const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
           <p>Count :</p>
           <button onClick={}> + </button>
           <button onClick={}> - </button>
           <button onClick={}> Reset </button>
        </div> 
    );
}

export default ReducerTest01;