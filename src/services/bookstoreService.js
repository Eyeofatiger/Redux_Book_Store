export default class BookstoreService {

    data = [
        {id:1, title: "Game of throns", author: 'G. Martin',
            price: '$37', coverImage: './images/Game.jpeg'},
        {id:2, title: "Kobzar", author: 'T. Shevchenko',
        price: '$25', coverImage: './images/Kobzar.jpg'},
    ];
    
    getBooks(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(this.data);
            }, 1500);
        });
    }
}