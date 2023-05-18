const createUser = () => {
  // DB action: create user in db and return uid and token
  const user = {
    uid: 0,
    token: 'aaaaaaaaaa',
  }
  return user
}
const getTokenByUserId = (uid: number) => {
  // DB action: get token by uid
  const token = 'bbbbbbbbbb'
  return token
}
const getUserInfo = (uid: number) => {
  // DB action: get user data by uid
  const user = {
    uid: 0,
    // ...
  }
  return user
}

const UserService = {
  createUser,
  getTokenByUserId,
  getUserInfo,
}

export default UserService
