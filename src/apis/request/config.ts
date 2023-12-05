// 方式一：手动调正
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'ccc'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'kode'

// const BASE_URL = ' http://coderwhy.org/test'
// const BASE_NAME = 'ahs'

//2.根据process.env.NODE_ENV 不同环境下面不同的值
// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = ' http://coderwhy.org/test'
}

export { BASE_URL, TIME_OUT }
