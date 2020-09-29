var mongoose=require("mongoose")
var Campground=require("./models/campground")
var data=[
    {
        name:"random1",
        image:"https://picsum.photos/200",
        description:"blah vlah vlah"
        
    },
    {
        name:"random2",
        image:"https://picsum.photos/200",
        description:"blah erg asajffdsfs"
        
    },
    {
        name:"random3",
        image:"https://picsum.photos/200",
        description:"fhudfisdfuf fuaifafasf fjuaifafiuas"
        
    }
]
function seedDB(){

    Campground.remove({},(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log("removed Campgrounds!!")
    })

    // add campgrounds
    data.forEach(function(seed){
        Campground.create(seed,(err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log("campground added")
            }

        })
    })
    
}
module.exports=seedDB