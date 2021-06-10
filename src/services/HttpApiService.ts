import { ApiService } from "../domain/ApiService";
import { Gist } from "../domain/Gist";
import { Context } from "../utils/Context";
import { AxiosService } from "./AxiosService";

export class HttpApiService implements ApiService {
  private axiosInstance: AxiosService;

  constructor() {
    this.axiosInstance = new AxiosService({
      baseURL: `${Context.BASE_PATH}`,
    });
  }

  getGists = (username: string): Promise<Gist[]> => {
    return this.axiosInstance.get<string, Gist[]>(`users/${username}/gists`)
  }
  
  getGist = (gistId: string): Promise<Gist> => {
    return this.axiosInstance.get<string, Gist>(`gists/${gistId}`)
  }
}
