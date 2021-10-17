
# 评论

## url

`/api/coms`

### request

{
  username,
  avatar,
  content
}

### response

#### success
{
  errno: 0,
  msg: '评论成功'
}

#### fail
{
  errno: -1,
  msg: '评论失败'
}


# 获取评论

## url

`/api/coms`

### request

{}

### response

#### success
{
  errno: 0,
  data:{
    {
      "username": "john",
      "avatar": "xxx",
      "content": "xxxx",
      "reply":[
        {
          "username": "de",
          "avatar": "xxx",
          "content": "xxxx",
        }
      ]
    },
    {
      "username": "peter",
      "avatar": "xxx",
      "content": "xxxx",
      "reply":[
        {
          "username": "lisa",
          "avatar": "xxx",
          "content": "xxxx",
        }
      ]
    }
  }
}

#### fail
{
  errno: -2,
  data: '',
  msg: '查询失败'
}