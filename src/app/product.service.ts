export class ProductService{
    getProducts() {
        return [
            {
               imageUrl: "http://loremflickr.com/150/150?random=1",
               productName: "Product 1",
               releasedDate: new Date(2016,5,30), 
               description: "Dowolny text opisujący product 1",
               rating: 4,
               numOfReviews: 2
           }, 
           {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: new Date(2018,10,30), 
                description: "Dowolny text opisujący product 2",
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: new Date(2020,7,18), 
                description: "Dowolny text opisujący product 3",
                rating: 5,
                numOfReviews: 10
            }
        ];
    }
}