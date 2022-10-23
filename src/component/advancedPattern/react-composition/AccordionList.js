import React from "react";
import Accordion from "./Accordion";

const AccordionList = () => {
  return (
    <div className="max-w-[600px] mx-auto w-full mt-4 ">
      <Accordion header="Can i click Accordion ">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ad
          vitae quia assumenda enim illo reiciendis aliquid cupiditate impedit
          amet. Sint, saepe nisi voluptatibus iste impedit alias sit possimus
          autem?
        </div>
      </Accordion>
      <Accordion header="Show dropdown">
        <div>What is position component?</div>
      </Accordion>
    </div>
  );
};

export default AccordionList;
