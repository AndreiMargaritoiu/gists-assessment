import { ApiService } from "../domain/ApiService";

interface ContextDependencies {
  apiService: ApiService;
}

export class Context {
  static apiService: ApiService;
  static BASE_PATH: string = 'https://api.github.com';

  static initialize(dependencies: ContextDependencies) {
    Context.apiService = dependencies.apiService;
  }
}
