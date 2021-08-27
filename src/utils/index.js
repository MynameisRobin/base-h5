// get请求拼接url
export const transformOptions = (options) => {
  let url = options.url;
  if (options.method == 'get') {
    let params = options.params;
    if (params) {
      Object.keys(params).forEach((key) => {
        url += `/${params[key]}`
      })
    }
    options.url = url;
    options.params = {};
  } else {
    let data = options.data;
    if (data) {
      Object.keys(data).forEach((key) => {
        url += `/${data[key]}`
      })
    }
    options.url = url;
    options.data = {};
  }
  return options
}

// post请求拼接url同时又存在data
export const transformPostOptions = (options) => {
  let url = options.url;
  if (options.method == 'post') {
    let data = options.data;
    options.url = url + `/${data.url}`;
    options.data = data.data;
  }
  return options
}
