import { Fork } from "./Fork";
import { Gist } from "./Gist";

export interface ApiService {
  getGists(username: string): Promise<Gist[]>;
  getGist (gistId: string): Promise<Gist>;
  getForks(url: string): Promise<Fork[]>
}