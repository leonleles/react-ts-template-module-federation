import { AxiosInstance } from 'axios'

import { Api } from '@/infra/http/request/axios'

export class Request {
  protected http: AxiosInstance

  constructor() {
    this.http = Api
  }
}
