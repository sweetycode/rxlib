const T_NUMBER = 0;
const T_BOOLEAN = 1;
const T_STRING = 2;
const T_NULL = 3;
const T_OBJ = 4;

type ValueType = string | number | boolean | null | Object;

export function stringify(v: ValueType) {
  if (v == null) {
    return `${T_NULL}`;
  }

  const type = typeof v;
  if (type === "number") {
    return `${T_NUMBER}${v}`;
  } else if (type === "string") {
    return `${T_STRING}${v}`;
  } else if (type === "boolean") {
    return `${T_BOOLEAN}${v ? 1 : 0}`;
  } else {
    return `${T_OBJ}${JSON.stringify(v)}`;
  }
}

export function unstringify(s: string): ValueType {
  if (s.length == 0) {
    return null;
  }
  const type = s.charCodeAt(0) - "0".charCodeAt(0);
  switch (type) {
    case T_BOOLEAN:
      return s.charAt(1) != "0";
    case T_STRING:
      return s.substring(1);
    case T_NUMBER:
      return parseFloat(s.substring(1));
    case T_NULL:
      return null;
    case T_OBJ:
      return JSON.parse(s.substring(1));
  }
  throw Error(`Unknown var type in ${s}`);
}
