import React, { useEffect, useId, useRef } from 'react';

// useId란 고유한 ID를 생성한다.
function UseIdTest(props) {
    const id = useId();
    const age = useId();

    const inputRef = useRef();
    const ageRef = useRef();

    useEffect(()=>{
      // 가져올수 없다 (useRef)
      //  const element = document.querySelector(id);
      //  console.log(element);

      const element = inputRef.current;
      console.log(element);

      const element2 = ageRef.current;
      console.log(element2);
    },[]);
    


    return (
        <div>
            <label htmlFor={id}>이름</label>
            <input id={id} ref={inputRef}/>

            {/* 만약 여러개일 경우 */}
            {/* <label htmlFor={id}>나이</label> */}
            <input id={age} ref={ageRef}/>

            <label htmlFor={`${id}-name`}>이름</label>
            <input id={`${id}-name`} ref={inputRef}/>

            <label htmlFor={`${id}-age`}>나이</label>
            <input id={`${id}-age`} ref={ageRef}/>

        </div>
    );
}

export default UseIdTest;