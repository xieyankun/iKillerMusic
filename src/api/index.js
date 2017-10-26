
export let loadUserData = () => {
  return new Promise((resolve, reject) => {
    // sessionStorage 获取用户信息
    let userInfo = {
      id: '888888',
      name: 'Killer',
      sex: 1
    }
    if (userInfo) {
      resolve(userInfo)
    } else {
      // todo 请求接口获取数据
    }
  })
}