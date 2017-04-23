
var bookTable = new Vue({
  el: '#bookTable',

  data: {
    books: [
      {
        id: '003',
        name: 'c++',
        ISBN: '123456',
        author: 'c++',
        tag: 'c++',
        create_time: '2017-04-01',
        update_time: '2017-04-20'
      }
    ]
  },

  methods: {
    add(book) {
      this.books.push(book);
    }
  }
});
