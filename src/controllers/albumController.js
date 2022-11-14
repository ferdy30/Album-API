const Album = require('../models/Album');

//list all items
exports.list = async(req, res) =>{
    try{
    const albums = await Album.find({});
    res.json(albums);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const album = await Album.findOne({id: req.params.id});
        if(!album){
            res.status(404).json({message: "Item not finded"});
        }
        res.json(Album);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const album = new Album(req.body);

    try{
        await album.save();
        res.json({message: "Added new Album"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const album = await Album.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Updated Album"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const album = await album.findOneAndDelete({id: req.params.id});
        res.json({message: "Deleted album"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El Cliente no existe"});
        next();
    }
};