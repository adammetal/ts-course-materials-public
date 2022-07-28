interface Some<T> {
  _tag: "some";
  val: T;
}

interface None {
  _tag: "none";
}

export type Option<T> = Some<T> | None;

export const some = <T>(t: T): Some<T> => ({ _tag: "some", val: t });

export const none = (): None => ({ _tag: "none" });

export const isSome = <T>(o: Option<T>): o is Some<T> => o._tag === "some";

export const isNone = <T>(o: Option<T>): o is None => o._tag === "none";

export const getVal = <T>(o: Option<T>): T => {
  if (isSome(o)) {
    return o.val;
  }

  throw new Error("getVal error: value is none");
};

export const option = <T>(val: T | null | undefined): Option<T> => {
  if (val !== null && val !== undefined) {
    return some(val);
  }

  return none();
};