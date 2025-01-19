const library = {
    books: [
      { title: "Harry Potter", author: "k.j.rowling", year: 2001 },
      { title: "1984", author: "George Orwell", year: 1949 },
      { title: "Rich Dad Poor Dad", author: "robert.t.kawisakey", year: 2000 }

    ]
  };

function logBybookTitle(library)
{
    library.books.forEach(book => {
        document.writeln("<hr><br>The book title:"+book.title + "<br>Author:"+book.author+"<br>Year:"+book.year);
        
    });
}
logBybookTitle(library);