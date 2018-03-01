export type Self = {
  self: string
}
export type RawEndpoint = {
  _id: string,
  name: string,
  type: string,
  interval: number,
  __v: number,
  lastAssert: string,
  options: {
    url: string,
    type: string,
    method: string,
    timeout: number
  }
}

export type EndpointResponseData = {
  _links: Self,
  _data: RawEndpoint
}

export type EndpointListResponse = {
  _links: {
    self: Self
  },
  _errors: boolean,
  _data: EndpointResponseData[]
}