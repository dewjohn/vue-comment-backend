/**
 * 返回失败的格式
 */

class errorModel{
  constructor(errno = -1, message = 'errno'){
    this.errno = errno,
    this.message = message
  }
}