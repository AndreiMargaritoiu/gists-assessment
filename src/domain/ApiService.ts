import { Gist } from "./Gist";

export interface ApiService {
  getGists(username: string): Promise<Gist[]>;
  getGist (gistId: string): Promise<Gist>;
}