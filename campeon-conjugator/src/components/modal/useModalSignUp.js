import { useState } from 'react';

const UseModalSignUp = () => {
  const [isShowingSignUp, setIsShowingSignUp] = useState(false);

  function toggleSignUp() {
    setIsShowingSignUp(!isShowingSignUp);
  }

  return {
    isShowingSignUp,
    toggleSignUp,
  }
};

export default UseModalSignUp;