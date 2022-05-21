const list = [
  {
    name: 'he',
    phone: '18888888888',
    age: 18
  },
  {
    name: 'qi',
    phone: '13333333333',
    age: 20
  },
  {
    name: 'ming',
    phone: '13777777777',
    age: 26
  },
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
