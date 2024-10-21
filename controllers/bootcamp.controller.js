const { Bootcamp, User } = require('../models');

// Crear y guardar un nuevo Bootcamp
exports.createBootcamp = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json(bootcamp);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Agregar un User al Bootcamp
exports.addUser = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.findByPk(req.params.bootcampId);
        if (!bootcamp) {
            return res.status(404).json({ message: 'Bootcamp no encontrado' });
        }
        const user = await User.findByPk(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await bootcamp.addUser(user);
        res.status(200).json({ message: 'Usuario agregado al Bootcamp exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un Bootcamp por ID
exports.findById = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.findByPk(req.params.id, {
            include: User
        });
        if (bootcamp) {
            res.status(200).json(bootcamp);
        } else {
            res.status(404).json({ message: 'Bootcamp no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los Bootcamps incluyendo los Users
exports.findAll = async (req, res) => {
    try {
        const bootcamps = await Bootcamp.findAll({
            include: User
        });
        res.status(200).json(bootcamps);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Consultar el Bootcamp por id, incluyendo los usuarios
exports.findBootcampByIdWithUsers = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.findByPk(req.params.id, {
            include: User
        });
        if (bootcamp) {
            res.json(bootcamp);
        } else {
            res.status(404).send('Bootcamp no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Listar todos los Bootcamp con sus usuarios
exports.findAllBootcampsWithUsers = async (req, res) => {
    try {
        const bootcamps = await Bootcamp.findAll({
            include: User
        });
        res.json(bootcamps);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
