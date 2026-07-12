import {useState} from 'react';
import FormPage from './FormPage';
import Password from './Password';
import TransactionSuccess from './TransactionSuccess';

const Details_2 = () => {
  
  const [activeState, setActiveState] = useState(1);

  const switchToCard2 = () => {
    setActiveState(2);
  };

  const switchToCard3 = () => {
    setActiveState(3);
  };

  return (
    <>
    {activeState === 1 && (
      <FormPage switchToCard2={switchToCard2}/>
    )}
    {activeState === 2 && (
      <Password switchToCard3={switchToCard3}/>
    )}
    {activeState === 3 && (
      <TransactionSuccess/>
    )}
    </>
  );
};



export default Details_2;
