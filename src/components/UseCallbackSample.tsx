import React, { useCallback, useMemo, useState } from "react";

const UseCallbackSample = () => {
  const [count, setCount] = useState(0)
  const getFavoriteFoodCallback = useCallback((food: string) => {
    return food
  }, [])
  const getFavoriteFood = useMemo(() => {
    console.log('get favorite function is called', count)
    return "りんご"
  },[count])

  console.log("UseCallbackSample is called")
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>++</button>
      <button onClick={() => getFavoriteFood}>useMemo button</button>
      <button onClick={() => getFavoriteFoodCallback('りんご')}>useCallback button</button>
    </>
  );
}

export default UseCallbackSample;