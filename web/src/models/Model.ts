import { AxiosPromise, AxiosResponse } from "axios";
interface ModelAttributes<T> {
  getAll(): T;
  set(update: T): void;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Eventing {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface hasId {
  id?: number;
}

export class Model<T extends hasId> {
  constructor(
    private events: Eventing,
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch() {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save() {
    this.sync
      .save(this.attributes.getAll())
      .then((response) => {
        this.trigger("save");
      })
      .catch(() => this.trigger("error"));
  }
}
