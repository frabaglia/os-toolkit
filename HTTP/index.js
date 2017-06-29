export let httpResultWrapperSimulator = (data) => {
  return {
    /* Taken from axios documentation: https://github.com/mzabriskie/axios#response-schema */
    data: data,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {}
  }
}

export let httpResultsListWrapperSimulator = (data) => {
  return {
    data: {
      hits:[data, data]
    },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {}
  }
}
