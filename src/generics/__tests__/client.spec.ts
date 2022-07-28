import nock from "nock";
import { expect, describe, test } from "vitest";
import { ApiClient } from "../client";
import {getVal, isSome} from '../option';

type Pony = {
  id?: string;
  name: string;
  color: string;
  age: number;
};

const client = new ApiClient<Pony>("http://api.ponies.com", "/");

describe("test api client with fake pony api", () => {
  test("get all ponies", async () => {
    nock("http://api.ponies.com")
      .get("/")
      .reply(200, [
        { id: "1", name: "steeve", color: "brown", age: 12 },
        { id: "2", name: "mark", color: "red", age: 10 },
        { id: "3", name: "joker", color: "orange", age: 5 },
      ]);

    const ponies = await client.getAll();
    expect(isSome(ponies)).toBe(true);
    expect(getVal(ponies)).instanceOf(Array);
    expect(getVal(ponies)[0]).toStrictEqual({
      name: "steeve",
      color: "brown",
      age: 12,
      id: "1",
    });
  });

  test("get one pony", async () => {
    nock("http://api.ponies.com")
      .get("/1")
      .reply(200, { id: "1", name: "steeve", color: "brown", age: 12 });

    const pony = await client.get("1");
    expect(isSome(pony)).toBe(true);
    expect(getVal(pony)).toStrictEqual({
      name: "steeve",
      color: "brown",
      age: 12,
      id: "1",
    });
  });

  test("create pony", async () => {
    nock("http://api.ponies.com")
      .post("/")
      .reply(200, { id: "1", name: "steeve", color: "brown", age: 12 });

    const pony = await client.add({ name: "steeve", color: "brown", age: 12 });

    expect(isSome(pony)).toBe(true);
    expect(getVal(pony)).toStrictEqual({
      name: "steeve",
      color: "brown",
      age: 12,
      id: "1",
    });
  });

  test("update pony", async () => {
    nock("http://api.ponies.com")
      .put("/1")
      .reply(200, { id: "1", name: "steeve", color: "brown", age: 15 });

    const pony = await client.update("1", {
      id: "1",
      name: "steeve",
      color: "brown",
      age: 15,
    });

    expect(isSome(pony)).toBe(true);
    expect(getVal(pony)).toStrictEqual({
      name: "steeve",
      color: "brown",
      age: 15,
      id: "1",
    });
  });

  test("delete pony", async () => {
    nock("http://api.ponies.com")
      .delete("/1")
      .reply(200, { id: "1", name: "steeve", color: "brown", age: 15 });

    const pony = await client.remove("1");

    expect(isSome(pony)).toBe(true);
    expect(getVal(pony)).toStrictEqual({
      name: "steeve",
      color: "brown",
      age: 15,
      id: "1",
    });
  });
});
