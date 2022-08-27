/* 
    Since price.mid() and price.quote() is being used, I will be assuming that price belongs to a class which can use the method mid and quote
*/
class Price{
    constructor(buy, sell, id, pair, timestamp)
    {
        this.buy = buy
        this.sell = sell
        this.id = id
        this.pair = pair
        this.timestamp = timestamp
    }

    mid(){
        return((this.buy + this.sell)/2)
    }

    quote(){
        return(this.pair.slice(3))
    }
}
class ds{
    constructor(){}

    /* 
        - This method retrieves the data from the data endpoint
          and converts into JSON format for easier manipulation.
        - From the JSON data the prices array is retrieved and
          for each object in the array a new Price object is 
          created and stored in the priceArray.
        - After iterating through all the objects, the priceArray
          is resolved.
     
    */
    static getPrices(){

        return new Promise((resolve, reject) => {
            fetch("https://static.ngnrs.io/test/prices")
            .then(res => res.json())
            .then(res_json => {
                let priceArray = []
                res_json.data.prices.forEach(priceObject => {
                    const {buy, sell, id, pair, timestamp} = priceObject
                    let price = new Price(buy, sell, id, pair, timestamp)
                    priceArray.push(price)
                } )

                resolve(priceArray)
            })
            .catch(e => reject(e + "Error fetching data"))
        })
    }  
}

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        //console.err(error); this was given in the Notion page, I think it's a typo because it should be console.error
        console.error(error);
    });

/* 
    If I may humbly suggest:

    I think it would be better to use ds.mid(price) and ds.quote(price) in the test code instead of price.mid() and price.quote()
    that way mid() and quote() can be part of the ds Utility class, making it a more robust and there is no need to create
    another Price class

*/