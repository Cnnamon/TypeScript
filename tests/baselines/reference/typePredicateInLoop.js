//// [typePredicateInLoop.ts]
// Repro from #12101

interface Type {
  type: number;
}

interface TypeExt extends Type {
  arr: Type[];
}

const guard = (arg: Type): arg is TypeExt => arg.type === 1;
const otherFunc = (arg1: Type, arg2: TypeExt): void => {};

export function y(arg: Type): void {
  if (guard(arg)) {
    for (const ITEM of arg.arr) {
      if (otherFunc(ITEM, arg)) {
      }
    }
  }
}

//// [typePredicateInLoop.js]
// Repro from #12101
"use strict";
exports.__esModule = true;
var guard = function (arg) { return arg.type === 1; };
var otherFunc = function (arg1, arg2) { };
function y(arg) {
    if (guard(arg)) {
        for (var _i = 0, _a = arg.arr; _i < _a.length; _i++) {
            var ITEM = _a[_i];
            if (otherFunc(ITEM, arg)) {
            }
        }
    }
}
exports.y = y;
