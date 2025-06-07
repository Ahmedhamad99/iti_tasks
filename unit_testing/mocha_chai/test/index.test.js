
const indexTest = require("../index");
const expect = require("chai").expect;
const assert = require("chai").assert;
const should = require("chai").should;

const assertMocha = require('assert')


describe("testing capitalizeText",function(){
      
    it("should return a string", function(){
        expect(typeof indexTest.capitalizeText("hello")).to.equal("string");})

    it("should return a string with the first letter capitalized", function(){
            expect(indexTest.capitalizeText("hello")).to.equal("HELLO");})
    
    it("should return error if input is not a string", function(){
        assert.throws(()=>{
            indexTest.capitalizeText(12334)
        },Error)
    })

    it("if input iti , out put not equal to hello",function(){
        expect(indexTest.capitalizeText("iti")).to.not.equal("hello")
    }
)

            
})



describe("testing createArray",function(){
     //delay the testing process 5 seconds 
  
    it("should return an array", function(done){
        this.timeout(7000)
      setTimeout(()=>{
          expect(indexTest.createArray(3)).to.be.an("array")
          
        done()
      },5000)
    })
    
  
        
    xit("testing pass one number 3 and it return array of length 3 and check if it has 1 element",function(){
        expect(indexTest.createArray(3)).to.be.an("array").that.to.be.include(1).that.have.lengthOf(3)
    })
    

    xit("makeing a variable and intialize it by 1 and before each test increase it by one and pass it to every function call",function(){
        let i=1
        beforeEach(function(){
            i++
        })
   
    })
    
})
