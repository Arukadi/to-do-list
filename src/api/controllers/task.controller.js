const db = require("../config/database");

exports.getAllTask = async(req, res) => {
    const { rows } = await db.query();

    res.status(201).send({
        message: "Task adicionada com sucesso!",
        body: {
            tasks: rows
        },
    });
};

exports.createTask = async(req, res) => {
    const { description, accountable, email } = req.body;
    const { rows } = await db.query();

    res.status(201).send({
        message: "Task adicionada com sucesso!",
        body: {
            task: { description, accountable, email }
        },
    });
};

exports.updateTask = async(req, res) => {
    const { id, description, accountable, email } = req.body;
    const { rows } = await db.query();

    res.status(201).send({
        message: "Task adicionada com sucesso!",
    });
};