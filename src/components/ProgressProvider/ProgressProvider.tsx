import { useEffect, useState } from "react";
import { ProgressProps } from "../../types";


export const ProgressProvider : React.FC<ProgressProps> = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = useState(valueStart);
    useEffect(() => {
      setValue(valueEnd);
    }, [valueEnd]);
  
    return (
        children ? children(value) : <></>
    );
};