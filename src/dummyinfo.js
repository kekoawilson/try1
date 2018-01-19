const users = [
    {
        name: 'Koa',
        id: 1,
        description: 'Yo'
    },
    {
        name: 'Bob',
        id: 2,
        description: 'Hi'
    },
    {
        name: 'John',
        id: 3,
        description: 'Hey'
    }
]

export function getUsers() {
    return users;
  }
  
  export function getUser(id) {
    let user = users.filter(e => {
      if(e.id === +id) {
        return e
      }
    })
    return user[0]
  }