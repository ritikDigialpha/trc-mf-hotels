declare module "host/Header" {
  const Header: React.ComponentType;
  export default Header;
}
declare module "host/Footer" {
  const Footer: React.ComponentType;
  export default Header;
}
declare module "host/hooks/useStore" {
  function useStore(): {
    incrementCounter: () => void;
    decrementCounter: () => void;
    incrementByAmountCounter: (amount: number) => void;
  };

  export default useStore;
}
declare module "host/hooks/useStoreSelector" {
  import type { Common, ProductState } from "host/types/storeState";
  export type RootState = {
    common: CounterState;
    product: ProductState;
  };

  export interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected): TSelected;
    <Selected = unknown>(selector: (state: TState) => Selected): Selected;
  }

  export const useStoreSelector: TypedUseSelectorHook<RootState>;
}

declare module "host/providers/StoreProvider" {
  import React from "react";

  type Props = {
    children: React.ReactNode;
  };
  export default function StoreProvider({ children }: Props): JSX.Element;
}
