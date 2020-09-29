var express=require("express")
var app=express();
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
Campground=require("./models/campground")
seedDB=require("./seeds")
seedDB();
mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended:true}));
//app.set("view engine","ejs")

//  Campground.create({
//      name:"Shaheen bagh",
//      image :"https://www.thestatesman.com/wp-content/uploads/2020/02/shaheen-bagh.jpg",
//      description : "A place i say my home this was the place for major uproar in india"
//  },function(err,campground){
//      if(err){
//          console.log(err)

//      }else{
//          console.log("new campground")
//          console.log(campground)
//      }
//  })


app.get("/",(req,res)=>{
    res.render("home.ejs")

})
app.get("/campgrounds",function(req,res){
    Campground.find({},(err,campgrounds)=>{
        if(err){
            console.log("err")
        }else{
            res.render("index.ejs",{campgrounds:campgrounds})
        }

    })

})
app.post("/campgrounds",(req,res)=>{
    //res.send("I am posting")
    var name=req.body.name
    var image=req.body.imageURL
    var desc=req.body.description
    
    var newCampground={name:name,image:image,description:desc}
    Campground.create(newCampground,(err,newlyCreated)=>{
        if(err){
            console.log("err")

        }
        else{
            res.redirect("/campgrounds") 
        }
    })
     // redirect back
     
}
)
app.get("/campgrounds/new",(req,res)=>{
res.render("new.ejs")
})
app.get("/campgrounds/:id",(req,res)=>{
  Campground.findById(req.params.id,(err,foundCampground)=>{
      if(err){
          console.log(err)
      }else{
        res.render("show.ejs",{campground:foundCampground})  
      }

  })
   // res.render("show.ejs")

})
app.listen(2849,function(){
console.log("Server started")
})