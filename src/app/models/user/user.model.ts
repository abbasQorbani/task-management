export interface User {
  userName: string;
  password: string;
  role: string;
}

export const mockedUser: User[] = [
  {
    password: '123?',
    userName: 'admin',
    role: 'admin'
  },
  {
    password: '456?',
    userName: 'user1',
    role: 'user'
  },
  {
    password: '789?',
    userName: 'user2',
    role: 'user'
  }
]

export const emptyUser: User = {
  password: '',
  userName: '',
  role: ''
}
