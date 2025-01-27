import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Inputs,
} from "preact/hooks";
import { useMount, useUnMount } from "./lifecycle";
import { debounce } from "common-utils/utils/helpers";
import { parseSearchParams } from "common-utils/utils/bom";

export function useIsClient(): boolean {
  const [isClient, setClient] = useState(false);
  useMount(() => setClient(true));
  return isClient;
}

export function useDebouncedCallback<T extends (...args: any) => ReturnType<T>>(
  func: T | undefined,
  wait: number,
  inputs: Inputs = []
): T | undefined {
  const funcRef = useRef(func);

  useEffect(() => {
    funcRef.current = func;
  }, [func]);

  return useMemo(() => {
    return debounce(
      (...args: any) => funcRef.current && funcRef.current(...args),
      wait
    );
  }, inputs) as T;
}

export function useDebouncedValue<T>(input: T, wait: number): [T] {
  const [value, setValue] = useState(input);
  const stateRef = useRef<{ timeout: number; lastInput: T }>({
    timeout: 0,
    lastInput: input,
  });

  const clearTimeout = () => window.clearTimeout(stateRef.current.timeout);
  useUnMount(clearTimeout);

  useEffect(() => {
    if (input == stateRef.current.lastInput) {
      return;
    }
    clearTimeout();
    stateRef.current.timeout = window.setTimeout(() => {
      setValue((stateRef.current.lastInput = input));
    }, wait);
  }, [input]);
  return [value];
}

// https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/hooks/src/use-debounced-state/use-debounced-state.ts
export function useDebouncedState<T>(
  defaultValue: T,
  wait: number
): [T, (value: T) => void] {
  const [value, setValue] = useState(defaultValue);
  const stateRef = useRef<{ timeout: number }>({ timeout: 0 });

  const clearTimeout = () => window.clearTimeout(stateRef.current.timeout);
  useUnMount(clearTimeout);

  const debounced = useCallback((newValue: T) => {
    stateRef.current.timeout = window.setTimeout(() => {
      setValue(newValue);
    }, wait);
  }, []);

  return [value, debounced];
}

export function useBiState<T1, T2>(
  a: T1
): [[a: T1 | null, (a: T1) => void], [b: T2 | null, (b: T2) => void]] {
  const [state, setState] = useState<[T1 | null, T2 | null]>([a, null]);
  return [
    [state[0], (a: T1) => setState([a, null])],
    [state[1], (b: T2) => setState([null, b])],
  ];
}

export function useToggleOnce(): [boolean, () => void] {
  const [state, setState] = useState(false);
  return [state, () => setState(true)];
}

export function useToggle(
  initialValue: boolean
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState<boolean>(initialValue);
  return [value, () => setValue((v) => !v), setValue];
}

export function useObjectState<T extends {}>(
  initialValue: T
): [T, (partial: Partial<T>) => void] {
  const [state, setState] = useState<T>(initialValue);

  return [state, (partial) => setState((s) => ({ ...s, ...partial }))];
}

export function useBrowserSearchParams(): Record<string, string> {
  const [state, setState] = useState<Record<string, string>>({})
  useEffect(() => {
    setState(parseSearchParams())
  }, [])
  return state
}
