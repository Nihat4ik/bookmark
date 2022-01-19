import { useEffect } from "react";

const PreventScrolling = (state) => {
  useEffect(() => {
    if (state) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [state]);
};

export default PreventScrolling;
