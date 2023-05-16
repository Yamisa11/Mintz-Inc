import { shoe_data } from "../data/shoe_data.js"
import { shoe_factory } from "../js/shoe_catalog._factory.js"

describe("Testing dropdown values", function() {

    it("this should test the items that have been filtered with colors in an array", function() {
    
        const shoe_instance = shoe_factory()

        shoe_instance.filter_shoe_categories(shoe_data, "color")

        assert.deepEqual(['Black', 'Blue', 'Green', 'Grey', 'Red'], shoe_instance.filter_shoe_categories(shoe_data, "color"))
       
    })

    it("this should test the items that have been filtered with sizes in an array", function() {
    
        const shoe_instance = shoe_factory()

        shoe_instance.filter_shoe_categories(shoe_data, "size")

        assert.deepEqual([ 5, 8, 9, 10 ], shoe_instance.filter_shoe_categories(shoe_data, "size"))
     
    })

    it("this should test the items that have been filtered with prices in an array", function() {
    
        const shoe_instance = shoe_factory()

        shoe_instance.filter_shoe_categories(shoe_data, "brand")

        assert.deepEqual([ 'Adidas', 'Jordan', 'Nike', 'Yeezy' ], shoe_instance.filter_shoe_categories(shoe_data, "brand"))
     
    })

    it("this should test the items that have been filtered with prices in an array", function() {
    
        const shoe_instance = shoe_factory()

        shoe_instance.filter_shoe_categories(shoe_data, "price")

        assert.deepEqual([ '4999.00', '5999.00', '7999.00' ], shoe_instance.filter_shoe_categories(shoe_data, "price"))
     
    })
})


describe("Testing if categories are filtered", function() {

    it("It should filter out all items that have a specific color", function() {

        const shoe_instance = shoe_factory()

        shoe_instance.filter_color(shoe_data, "Black")

        assert.deepEqual([  {
            id: 1,
            color : 'Black',
            name : "Jordan Retro Thunder",
            brand : "Jordan",
            size : 10,
            price : parseFloat(7999).toFixed(2),
            img : "./images/jordan_retro_thunder.jpg",
            in_stock : 8,

        } ], shoe_instance.filter_color(shoe_data, "Black"))
    })

    it("It should filter out all items that have a specific size", function() {

        const shoe_instance = shoe_factory()
        
        shoe_instance.filter_size(shoe_data, 5)
       
        assert.deepEqual([  {
            id: 3,
            color : 'Red',
            name : "Nike Dunk Low Satin",
            brand : "Nike",
            size : 5,
            price : parseFloat(5999).toFixed(2),
            img : "./images/nike_dunk_low_satin.jpg",
            in_stock : 6,
           

        } ], shoe_instance.filter_size(shoe_data, 5))
    })


    it("It should filter out all items that have a specific brand", function() {

        const shoe_instance = shoe_factory()
        
        shoe_instance.filter_brand(shoe_data, "Nike")
       
        assert.deepEqual([  {
            id: 3,
            color : 'Red',
            name : "Nike Dunk Low Satin",
            brand : "Nike",
            size : 5,
            price : parseFloat(5999).toFixed(2),
            img : "./images/nike_dunk_low_satin.jpg",
            in_stock : 6,
           

        } ], shoe_instance.filter_brand(shoe_data, "Nike"))
    })

    it("It should filter out all items that have a specific price", function() {

        const shoe_instance = shoe_factory()
        
        shoe_instance.filter_price(shoe_data, 5999)
       
        assert.deepEqual([    {
            id: 2,
            color : 'Grey',
            name : "Nike Dunk Low Mica Green",
            brand : "Nike",
            size : 8,
            price : parseFloat(4999).toFixed(2),
            img : "./images/nike_dunk_low.jpg",
            in_stock : 8,

        },
        {
            id: 3,
            color : 'Red',
            name : "Nike Dunk Low Satin",
            brand : "Nike",
            size : 5,
            price : parseFloat(5999).toFixed(2),
            img : "./images/nike_dunk_low_satin.jpg",
            in_stock : 6,
           

        }
    
    
    ], shoe_instance.filter_price(shoe_data, 5999))
    })

} )