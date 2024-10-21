const { User, Bootcamp } = require('../models');

// Crear y guardar un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener los Bootcamps de un usuario por ID
exports.findUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: Bootcamp
        });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los usuarios incluyendo los Bootcamps
exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll({
            include: Bootcamp
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un usuario por ID
exports.updateUserById = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un usuario por ID
exports.deleteUserById = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Consultar un usuario por id, incluyendo los Bootcamp
exports.findUserByIdWithBootcamps = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: Bootcamp
        });
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Listar los usuarios con sus Bootcamp
exports.findAllUsersWithBootcamps = async (req, res) => {
    try {
        const users = await User.findAll({
            include: Bootcamp
        });
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
