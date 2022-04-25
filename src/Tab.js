import React, { useState } from 'react';

const useTabs = (initialTab, allTabs) => {
   if (!allTabs || !Array.isArray(allTabs)) {
      return false;
   }

   const [currentIndex, setCurrentIndex] = useState(initialTab);
   return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex,
   };
};

const content = [
   { tab: 'Seticon 1', content: "I'm the content of the Section 1" },
   { tab: 'Seticon 2', content: "I'm the content of the Section 2" },
];

const Tab = () => {
   const { currentItem, changeItem } = useTabs(0, content);
   return (
      <div>
         {content.map((section, index) => (
            <>
               <button key={index} onClick={() => changeItem(index)}>
                  {section.tab}
               </button>
            </>
         ))}
         <div>{currentItem.content}</div>
      </div>
   );
};

export default Tab;
