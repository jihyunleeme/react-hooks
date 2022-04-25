import React, { useState } from 'react';

/* eslint-disable no-shadow */
const useInput = (initialValue, validator) => {
   const [value, setValue] = useState(initialValue);
   const onChange = event => {
      const {
         target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === 'function') {
         willUpdate = validator(value);
      }
      if (willUpdate) {
         setValue(value);
      }
   };
   return { value, onChange };
};

const Input = () => {
   const maxLen = value => value.length <= 10;
   const minLen = value => value.length >= 3;
   // value => !value.includes('@');
   const name = useInput('Ms.', minLen);
   return (
      <div>
         {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
         <input placeholder="Name" {...name} />
      </div>
   );
};

export default Input;
