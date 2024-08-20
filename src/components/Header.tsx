import useStore from "host/hooks/useStore";
import { useStoreSelector } from "host/hooks/useStoreSelector";
import React from "react";
import type { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren<{}>) => {
  const {
    common: { value },
  } = useStoreSelector((state) => state);
  const { decrementCounter, incrementByAmountCounter, incrementCounter } =
    useStore();
  return (
    <div style={{ width: "100%", background: "yellow", textAlign: "center" }}>
      {children}
      <br></br>
      {value}
      <br></br>
      <button onClick={incrementCounter}> button to increase redux </button>
    </div>
  );
};

export default Header;
