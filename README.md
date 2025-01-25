# TypeScript Type Mismatch Bug

This repository demonstrates a common type error in TypeScript where a function receives an argument of an unexpected type. The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.

## Bug Description

The `add` function is defined to accept two numbers and return their sum. However, in the example usage, a string is passed as the second argument.  TypeScript's type system correctly identifies this mismatch, preventing the code from compiling.

## Bug Solution

The solution involves ensuring the arguments passed to the function match the declared types. This can be achieved through various methods, such as type checking or using type guards.