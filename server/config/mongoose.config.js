const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/bdPiratas", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// })
mongoose.connect("mongodb+srv://santiago:Alulema_0105784847@cluster0.sps8b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));