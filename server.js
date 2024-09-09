const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user.schema");
const app = express();
const Port = 5000;
mongoose
  .connect("mongodb+srv://sadok:<sadok>@cluster0.in9q3.mongodb.net/")
  .then(() => console.log("Database connected !"))
  .catch((err) => console.log("err", err));
app.get("/", (req, res) => {
  res.send("hello there");
});

app.post("/add-user", (req, res) => {
  const newUser = {
    firstName: "Foulen1",
    LastName: "Falten",
    age: 50,
  };

  const userToAdd = new User(newUser);
  userToAdd
    .save()
    .then(() => res.status(200).json("user created success!"))
    .catch((err) => console.log("err", err));
    res.status(500).json('Error creating user');

})


app.put("/update-user/:id"),
  (req, res) => {
    const userObj = {
      firstName: "Foulen2",
      LastName: "Falten2",
      age: 30,
    }
  User.updateOne({_id: req.params.id},userObj)
  .then(() => res.status(200).json("user update success!"))
  .catch((err) => console.log("err", err));
  res.status(500).json('Error creating user')
}

app.delete('/delete-user/:user_id',(req,res)=>{
    User.deleteOne({_id:req.params.user_id})
    .then(() => res.status(200).json('User deleted successfully!'))
    .catch((err) => {
        console.log('err', err);
        res.status(500).json('Error delete user');
    });
})

app.get('/find-users-by-name/:firstName', (req, res) => {
    User.find({_firstName: req.params.firstName })
      .then(users => res.status(200).json(users))
      .catch(err => res.status(500).json('Error finding users'));
  });

app.post('/add-post' , (req,res) => {
   
    const newPost = req.body

     postToAdd = new Post(newPost)

    postToAdd.save()
    .then(() => res.status(200).json('Post created successfully!'))
    .catch((err) => {
        console.log('err', err);
        res.status(500).json('Error creating post');
    }); 
})

app.listen(Port, (err) => {
  err ? console.log("err", err) : console.log(`server running on ${Port}`);
});
