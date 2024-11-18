import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware

app.use(express.json()); // Parse JSON bodies
app.use(cors({
  origin: '*',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials:true
}))
const DB_NAME="WT_DB";
const connectDB=async()=>{
  try{
      const connection=await mongoose.connect(`mongodb+srv://akshatkrish2005:5XP1vdlJq3OX8jZK@cluster0.lrwxk.mongodb.net/${DB_NAME}`);
      console.log(`MongoDB Connected: ${connection.connection.host}`);   
  }catch(error){
      console.error("Error in connecting to MongoDB ",error);
      process.exit(1);
  }
}
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: `,PORT);
    }) 
    app.on("error",()=>{
        console.log("Error is omnipresent",error);
        throw error;  
    })
})
.catch((err)=>{
    console.log("MongoDB not connected. Some error in connecting ",err);
})
const asyncHandler=(requestHandler)=>{
  return (req,res,next)=>{
      Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
  }
}
// MongoDB connection
/*const mongoURI = 'mongodb://127.0.0.1:27017/traveldb'; // Use your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
*/
// Flight Schema
const flightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  price: { type: Number, required: true },
  classType: { type: String, required: true },
});
const userSchema=new mongoose.Schema({
  username:{
      type:String,
      required:true,
      unique:true,
      trim:true
  },
  email:{
      type:String,
      required:true,
      trim:true
  },
  password:{  
      type:String,
      required:[true,"Password is required "]
  }})
const User=mongoose.model('User',userSchema);
const Flight = mongoose.model('Flight', flightSchema);
class ApiResponse{
    constructor(
        statuscode,
        data,
        message="Success"
    ){
        this.statuscode=statuscode;
        this.data=data;
        this.message=message;
        this.success=statuscode<400;

    }
}
class ApiError extends Error{
    constructor(
        statuscode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message);
        this.statuscode=statuscode;
        this.data=null;
        this.message=message;
        this.success=false;
        this.errors=errors;
        if(stack){
            this.stack=stack;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

const registerUser=asyncHandler(async(req,res)=>{
  const {username,email,password,phoneNo}=req.body;
  if ([username,email,password,phoneNo].some((field)=>field?.trim()==="")){
      throw new ApiError(400,"Please fill all the fields");
  }
  const existingUser=await User.findOne({username});
  if(existingUser){
      throw  new ApiError(400,"Username already exists");
  }
  const user=await User.create({
      username,
      email,
      password, 
  })
  const createdUser=await User.findById(user._id).select("-password");
  if(!createdUser){
      throw new ApiError(404,"Error in registering the user");
  }
  return res.status(201).json(new ApiResponse(200,createdUser,"User has been registered"));
})

const login=asyncHandler(async(req,res)=>{
  const {email,password}=req.body;
  if(!email){
      throw new ApiError("Email not provided");
  }
  const user=await User.findOne({email});
  if(!user){
      throw new ApiError(404,"User not found");
  }
  if(password!=user.password){
      throw new ApiError(401,"Password given is wrong");
  }
  const loggedInUser=await User.findById(user._id).select("-password");
  if(!loggedInUser){
      throw new ApiError(404,"Error in retrieving all information about user");
  }
  return res.status(200).json(
      new ApiResponse(200,{
          user:loggedInUser,
          id:loggedInUser._id,
          email:loggedInUser.email
      },"User logged in successfully"));
})



// Routes
import { Router } from 'express';
/**
 * 1. Fetch all flights
 * Allows optional query parameters for filtering flights.
 */
const router = Router();
router.route('/register').post(registerUser);
router.route('login').post(login);
app.get('/api/flights', async (req, res) => {
  const { origin, destination, departureDate, returnDate, classType } = req.query;

  try {
    // Build the query object dynamically
    const query = {
      ...(origin && { origin }),
      ...(destination && { destination }),
      ...(departureDate && { departureTime: { $gte: new Date(departureDate) } }),
      ...(returnDate && { arrivalTime: { $lte: new Date(returnDate) } }),
      ...(classType && { classType }),
    };

    const flights = await Flight.find(query);
    res.json(flights);
  } catch (err) {
    console.error('Error fetching flights:', err);
    res.status(500).json({ error: 'Failed to fetch flights' });
  }
});

/**
 * 2. Search flights (POST method preferred)
 */
app.post('/api/search-flights', async (req, res) => {
  const { origin, destination, departureDate, returnDate, classType } = req.body;

  try {
    const query = {
      ...(origin && { origin }),
      ...(destination && { destination }),
      ...(departureDate && { departureTime: { $gte: new Date(departureDate) } }),
      ...(returnDate && { arrivalTime: { $lte: new Date(returnDate) } }),
      ...(classType && { classType }),
    };

    console.log('Executing search query:', query);

    const flights = await Flight.find(query);

    res.status(200).json({
      success: true,
      flights,
    });
  } catch (error) {
    console.error('Error searching flights:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to search flights. Please try again.',
    });
  }
});

/**
 * 3. Submit new flight data
 */
app.post('/api/submit-flights', async (req, res) => {
  console.log('Submit Flights request received:', req.body);

  try {
    const flightData = req.body;

    // Ensure required fields are present
    const requiredFields = ['flightNumber', 'origin', 'destination', 'departureTime', 'arrivalTime', 'price', 'classType'];
    for (const field of requiredFields) {
      if (!flightData[field]) {
        console.error(`Missing required field: ${field}`);
        return res.status(400).json({ success: false, error: `Missing required field: ${field}` });
      }
    }

    const newFlight = new Flight(flightData);
    const savedFlight = await newFlight.save();

    console.log('New flight saved:', savedFlight);

    res.status(200).json({
      success: true,
      message: 'Flight submitted successfully!',
      data: savedFlight,
    });
  } catch (err) {
    console.error('Error submitting flight:', err.message);
    res.status(500).json({ success: false, error: 'Failed to submit flight' });
  }
});

// Health Check Route (Optional for debugging)
app.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running and healthy.' });
});

// Catch-all route for undefined endpoints
app.use((req, res) => {
  console.error(`404 Not Found - ${req.method} ${req.originalUrl}`);
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
