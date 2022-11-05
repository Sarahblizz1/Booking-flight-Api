const Flight = require("../model/Flight");
const {v4: uuid} = require("uuid");


//add/book flight
exports.addFlight = async (req, res) => {
  try{
    const { title, time, price, date} = await req.body;
    const newFlight = {
      id: uuid(),
      title,
      time,
      price,
      date,
    }
    Flight.push(newFlight)
    res.status(200).json({
      message: "flight Added and booked",
      flight: flight,
    })
} catch (err) {
res.status(500).json({ message: err.message})
  }
      }

//get all flight
exports.getAllFlight = (req, res) => {
    try{
    let flight = Flight;
    res.status(200).json({
        message: "All flights gotten",
        flight,
      })
    } catch (error) {res.status(500).json({message: err})
  }
}

//Get single flight
exports.getSingleFlight = async (req, res) => {
  try{
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    res.status(200).json({
      message: "flight found",
      flight,
    })
  } catch (error) {res.status(500).json({message: err})
}
  }

//update flight
exports.updateFlight = async (req, res) => {
  try{
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    const { title, time, price, date} = await req.body;
      flight.title = title;
      flight.time = time;
      flight.price = price;
      flight.date = date; 
    res.status(200).json({
      message: "updated flight",
      flight,
    })
} catch (err) {
res.status(500).json({ message: err.message})
  }
        }

//delete flight
exports.deleteFlight = async (req, res) => {
  try{
    let id = req.params.id;
    const flight = Flight.find((flight) => flight.id === id);
Flight.splice((Flight.indexOf(flight), 1))
               res.status(200).json({
              message:"flight deleted",
                flight,
  })
  } catch (err) {res.status(500).json({ message: error })
  }
  }
  



