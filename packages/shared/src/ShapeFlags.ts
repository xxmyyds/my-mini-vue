export const enum ShapeFlags {
  ELEMENT = 1, //000001
  STATEFUL_COMPONENT = 1 << 1, //000010
  TEXT_CHILDREN = 1 << 2, //000100
  ARRAY_CHILDREN = 1 << 3, //001000
  SLOT_CHILDREN = 1 << 4, //010000
}
