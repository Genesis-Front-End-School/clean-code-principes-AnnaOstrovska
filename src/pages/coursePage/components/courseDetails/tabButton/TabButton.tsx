import { ITabButtonProps } from "../models";
 
export const TabButton = ({ text, id, className, handleClick }: ITabButtonProps) => (
  <button id={id} className={className} onClick={handleClick}>
    {text}
  </button>
)
