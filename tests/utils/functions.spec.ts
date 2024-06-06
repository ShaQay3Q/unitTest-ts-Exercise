import { test, expect, describe, it } from "vitest";
import {createUser} from "../../src/utils/functions";

describe("createUser", () => {

  test("should be not permittedToDrink", () => {
    const user = createUser("Julian Vogel", 13);
    expect(user.permittedToDrink).toBe(false);
  });

  test("should be permittedToDrink", () => {
    const user = createUser("Julian Vogel", 32);
    expect(user.permittedToDrink).toBe(true);
  });

  test("should throw if name is in the incorrect format", () => {  
    expect(() => createUser("Julian", 32)).toThrowError("Incorrect name format")
    expect(() => createUser("Julian U. Vogel", 32)).toThrowError("Incorrect name format")
  })

  test("should not throw is the name is in correct format", () => {
    const user = createUser("Julian Vogel", 32);
    expect(() => createUser("Julian Vogel", 32)).not.toThrowError()
  })
  
  test("should throw if age is in the wrong range", () => {
    expect(() => createUser("Julian Vogel", 121)).toThrowError("Inacceptable age entry")
    expect(() => createUser("Julian Vogel", -1)).toThrowError("Inacceptable age entry")
  })

  test("should throw if a number is in the name", () => {
    expect(() => createUser("Jul1an Vogel", 32)).toThrowError("No numbers allowed in the name")
    expect(() => createUser("Julian V0gel", 32)).toThrowError("No numbers allowed in the name")
  })
});