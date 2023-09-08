const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ghoshrudranil8:Rudranil%401234@cluster0.bzkpntc.mongodb.net/hungryhivemern?retryWrites=true&w=majority";
  const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected Succesfully!');
      const fetched_data = await mongoose.connection.db.collection("food_items");
      const data=await fetched_data.find({}).toArray();
        const foodCategory=await mongoose.connection.db.collection("food_category");
        const catData=await foodCategory.find({}).toArray();
        
       
      global.food_items=data;
      global.foodCategory=catData;
    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports = mongoDB;
