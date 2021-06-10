import { GistFile } from "./GistFile";
import { Owner } from "./Owner";

export interface Gist {
  id: number;
  description: string;
  created_at: string;
  updated_at: string;
  truncated: boolean;
  url: string;
  owner: Owner;
  files: GistFile[];
}