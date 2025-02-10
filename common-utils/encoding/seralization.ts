const T_NULL = 0;
const T_BOOLEAN = 1;
const T_NUMBER_COMPACT = 2;
const T_NUMBER = 3;
const T_STRING_COMPACT = 4;
const T_STRING = 5;

const TYPE_BIT_SHIFT = 3;
const NULL_BM = T_NULL << TYPE_BIT_SHIFT;
const BOOLEAN_BM = T_BOOLEAN << TYPE_BIT_SHIFT;
const NUMBER_COMPACT_BM = T_NUMBER_COMPACT << TYPE_BIT_SHIFT;
const NUMBER_BM = T_NUMBER << TYPE_BIT_SHIFT;
const STRING_COMPACT_BM = T_STRING_COMPACT << TYPE_BIT_SHIFT;
const STRING_BM = T_STRING << TYPE_BIT_SHIFT;

type ValueType = null | boolean | number | string;
interface KVType {
  [key: string]: ValueType;
}

const B64_STRING = "";

function i2c(i: number): string {
  return B64_STRING.charAt(i);
}

function c2i(c: string): number {
  return 0; // TODO
}

function b64EncodeInt(n: number): string {}

function encodeValue(v: ValueType) {
  if (v == null) {
    return i2c(NULL_BM);
  } else if (typeof v === "boolean") {
    return i2c(BOOLEAN_BM | (v ? 1 : 0));
  } else if (typeof v === "number") {
    if (v >= 0 && v < 15) {
      return i2c(NUMBER_BM | v);
    } else {
      var b64Int = b64EncodeInt(v);
      return i2c(NUMBER_BM | 0x1111);
    }
  }
}
