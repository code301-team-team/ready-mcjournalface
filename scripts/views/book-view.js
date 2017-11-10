'use strict';

(function (module) {

  const bookListView = {};

  bookListView.initIndexPage = function () {
    $('.container').hide();
    $('.book-list-view').show();
    Book.all.map(book => $('#book-list').append(book.toHtml()));
    console.log('bookListView');
  };

  module.bookListView = bookListView;

  const bookDetailView = {};

  bookDetailView.initIndexPage = function () {
    $('.container').hide();
    $('.book-detailed-view').show();
    Book.all.book.toHtml();
  };

  module.bookDetailView = bookDetailView;

})(app)
