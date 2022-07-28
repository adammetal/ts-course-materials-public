import axios from "axios";
import { Option, option } from "./option";

const get = <T>(url: string): Promise<T> =>
  axios.get(url).then((res) => res.data);

const post = <T>(url: string, data: unknown): Promise<T> =>
  axios.post(url, data).then((res) => res.data);

const put = <T>(url: string, data: unknown): Promise<T> =>
  axios.put(url, data).then((res) => res.data);

const del = <T>(url: string): Promise<T> =>
  axios.delete(url).then((res) => res.data);

const makeUrl = (path: string, base: string): string =>
  new URL(path, base).toString();

export class ApiClient<T> {
  private readonly base: string;
  private readonly prefix: string;

  public constructor(base: string, prefix: string) {
    this.base = base;
    this.prefix = prefix;
  }

  public async getAll(): Promise<Option<T[]>> {
    const url = makeUrl(this.prefix, this.base);
    const items = <T[]>await get(url);
    return option(items);
  }

  public async get(id: string): Promise<Option<T>> {
    const url = makeUrl(`${this.prefix}${id}`, this.base);
    const item = <T>await get(url);
    return option(item);
  }

  public async add(item: T): Promise<Option<T>> {
    const url = makeUrl(this.prefix, this.base);
    const posted = <T>await post(url, item);
    return option(posted);
  }

  public async remove(id: string): Promise<Option<T>> {
    const url = makeUrl(`${this.prefix}${id}`, this.base);
    const deleted = <T>await del(url);
    return option(deleted);
  }

  public async update(id: string, item: T): Promise<Option<T>> {
    const url = makeUrl(`${this.prefix}${id}`, this.base);
    const updated = <T>await put(url, item);
    return option(updated);
  }
}
