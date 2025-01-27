import type { CnProps } from "common-ui/decl";
import { ccx } from "common-utils/cx";
import {
  createContext,
  type ComponentChildren,
  type ComponentProps,
} from "preact";
import {
  useContext,
  useState,
  type Dispatch,
  type StateUpdater,
} from "preact/hooks";

const theme = {
  tabs: ``,
  list: `bg-zinc-100 p-1 rounded-lg space-x-1`,
  trigger: `px-8 py-1 text-sm font-medium text-zinc-500 rounded-md data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow`,
};

interface TabsContextType {
  value: string;
  setValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextType>({
  value: "",
  setValue: () => {},
});

function Tabs({
  className,
  children,
  value,
  onChange,
}: CnProps & {
  value: string;
  onChange: (value: string) => void;
  children: ComponentChildren;
}) {
  return (
    <div className={ccx(theme.tabs, className)}>
      <TabsContext.Provider value={{ value: value ?? "", setValue: onChange }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
}

function List({
  className,
  children,
}: CnProps & { children: ComponentChildren }) {
  return <div className={ccx(theme.list, className)}>{children}</div>;
}

function Trigger({
  className,
  value,
  ...props
}: CnProps & { value?: string } & ComponentProps<"button">) {
  const { value: currentValue, setValue } = useContext(TabsContext);
  const state = currentValue === value ? "active" : "inactive";
  return (
    <button
      className={ccx(theme.trigger, className)}
      onClick={() => setValue(value ?? "")}
      {...props}
      {...{ "data-state": state }}
    ></button>
  );
}

function Content({
  value,
  children,
}: {
  value: string;
  children?: ComponentChildren;
}) {
  const { value: currentValue } = useContext(TabsContext);
  if (value !== currentValue) {
    return <></>;
  }
  return children;
}

export default Object.assign(Tabs, {
  List,
  Trigger,
  Content,
});
