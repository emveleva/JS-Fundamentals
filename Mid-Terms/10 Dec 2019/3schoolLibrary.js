function solve(arr){
    let bookShelf = arr.shift().split('&');
    
    while ((line = arr.shift()) !== 'Done'){
        let [command, firstBook, secondBook] = line.split(' | ');

        switch (command) {
            case 'Add Book':
                if (!bookShelf.includes(firstBook)){
                    bookShelf.unshift(firstBook);
                }
                break;
            case 'Take Book':
                if (bookShelf.includes(firstBook)){
                    let index = bookShelf.indexOf(firstBook);
                    bookShelf.splice(index, 1);
                }
                break;
            case 'Swap Books':
                if (bookShelf.includes(firstBook) && bookShelf.includes(secondBook)){
                    let indexFirst = bookShelf.indexOf(firstBook);
                    let indexSecond = bookShelf.indexOf(secondBook);
                    bookShelf.splice(indexFirst, 1, secondBook);
                    bookShelf.splice(indexSecond, 1, firstBook);
                }
                break;
            case 'Insert Book':
                bookShelf.push(firstBook);
                break;
            case 'Check Book':
                let index = Number(firstBook);
                if (bookShelf.length > index && index > -1){
                    console.log(bookShelf[index]);
                }
                break;
        }
    }
    console.log(bookShelf.join(', '))
}

solve([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | -1',
    'Done',
    ''
  ]
  
  
  )