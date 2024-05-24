import { useState } from "react";
import { CardCompany, Strong, Paragraph } from "./style";


export const Card = ({ name, country, index, copyListCards, setCopyListCards, dragItem, dragOverItem,}) => {
  
  const [isDragged, setIsDragged] = useState(false);

  const dragStart = (e, index) => {
    dragItem.current = index;
  };

  const dragEnter = (e, index) => {
    dragOverItem.current = index;
    setIsDragged(true);
  };

  const dragEnd = () => {
    let companies = [...copyListCards];
    const draggedCardContent = companies[dragItem.current];
    const overCardContent = companies[dragOverItem.current];
    companies.splice(dragItem.current, 1);
    companies.splice(dragItem.current, 0, overCardContent);
    companies.splice(dragOverItem.current, 1);
    companies.splice(dragOverItem.current, 0, draggedCardContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setCopyListCards(companies);
    setIsDragged(false);
  };


  return (
    <>

      <CardCompany
        draggable
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragLeave={() => setIsDragged(false)}
        onDragEnd={dragEnd}
        $isDragged = { isDragged }
      >

        <Strong>Company:</Strong>
        <Paragraph>{name}</Paragraph>
        <Strong>Country:</Strong>
        <Paragraph>{country}</Paragraph>

      </CardCompany>
    </>
  );
};