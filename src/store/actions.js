export function add(num) {
  console.log('actions add', num)
  return {
    type: 'add',
    value: ++num
  }
}

export function cut(num) {
  return {
    type: 'cut',
    value: --num
  }
}

export function login(data) {
  return {
    type: 'login',
    data
  }
}

export function logout(data) {
  return {
    type: 'logout',
    data
  }
}
