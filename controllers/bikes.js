const Bike = require('../models/Bikes')

module.exports.getAll = async function(req,res){
    try{
        const bikes = await Bike.find({})
        res.status(200).json(bikes)
    } catch(e){
        throw(e)
    }
}

module.exports.create = async function(req,res){
    const bike = new Bike ({
        name: req.body.name,
        type: req.body.type,
        price: +req.body.price,
        rent: req.body.rent
    })
    try{
        await bike.save()
        res.status(201).json(bike)
    } catch(e){
        throw(e)
    }
}

module.exports.update = async function(req,res){
    
      try {
        const bike = await Bike.findOneAndUpdate(
           
          {_id: req.params.id},
          {$set: req.body},
          {new: true}
        )
        res.status(200).json(bike)
            } catch(e){
                throw(e)
        }
}

module.exports.remove = async function(req,res){
    try{
        await Bike.remove({_id: req.params.id})
        res.status(200).json({
            message: "Байк удален"
        })
    } catch (e){
        throw(e)
    }
}