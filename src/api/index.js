
export let loadUserData = () => {
  return new Promise((resolve, reject) => {
    let user = null
    let userInfo = {
      id: '888888',
      name: 'Killer',
      sex: 1
    }
    if (userInfo) {
      resolve(userInfo)
    } else {
      resolve(user)
    }
  })
}