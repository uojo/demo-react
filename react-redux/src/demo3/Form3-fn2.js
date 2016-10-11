const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      console.info("异步校验");
      if ([ '1', 'uojo', 'admin' ].includes(values.username)) {
        throw { username: 'That username is taken' }
      }
    })
}

export default asyncValidate