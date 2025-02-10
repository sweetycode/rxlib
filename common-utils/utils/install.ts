import { createExposedPromise } from "./promise";

const dedupCache = new Map<string, any>();

function dedup(key: string, fn: () => any) {
  const cachedVal = dedupCache.get(key);
  if (cachedVal != null) {
    return cachedVal;
  }

  const result = fn() ?? true;
  dedupCache.set(key, result);
  return result;
}

export async function installScript<T = void>(
  src: string,
  initializer?: () => Promise<T>
): Promise<T> {
  return dedup(src, () => {
    return new Promise<T>((resolve, reject) => {
      const el = document.createElement("script");
      el.src = src;
      el.onload = () => {
        initializer != null ? initializer().then(resolve) : resolve(null as T);
      };
      el.onerror = reject;
      document.head.appendChild(el);
    });
  });
}

export function installScriptInline(script: string): void {
  dedup(script, () => {
    const el = document.createElement("script");
    el.innerHTML = script;
    document.head.appendChild(el);
  });
}

export function installStyle(style: string, inline = false): void {
  dedup(style, () => {
    const el = document.createElement("link");
    el.rel = "stylesheet";
    if (inline) {
      el.innerHTML = style;
    } else {
      el.href = style;
    }
    document.head.appendChild(el);
    return true;
  });
}

export function installEsm<T>(src: string, name: string): Promise<T> {
  return dedup(src, () => {
    installCompleteEsmApi();

    var script = `
      import ${name} from "${src}";
      __completeEsm("${src}", ${name});
    `;

    const el = document.createElement("script");
    el.type = "module";
    el.innerHTML = script;
    document.head.appendChild(el);

    return resolveEsm(src);
  });
}

const esmCache = new Map<
  string,
  {
    promise: Promise<any>;
    resolve?: (any: any) => void;
    reject?: (err: Error) => void;
  }
>();

function installCompleteEsmApi() {
  const w = window as any;
  if (w.__completeEsm == null) {
    w.__completeEsm = completeEsm;
  }
}

function completeEsm(key: string, value: any) {
  const entry = esmCache.get(key);
  if (entry != null) {
    if (entry.resolve) {
      entry.resolve(value);
      esmCache.set(key, { ...entry, resolve: undefined, reject: undefined });
    }
    return;
  }
  esmCache.set(key, { promise: new Promise((resolve) => resolve(value)) });
}

function resolveEsm<T>(key: string): Promise<T> {
  let entry = esmCache.get(key);
  if (entry == null) {
    entry = createExposedPromise();
    esmCache.set(key, entry);
  }
  return entry.promise;
}
