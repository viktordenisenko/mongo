
const list = (req, res)=> {
    Department.find({},(err, departments) => {
        res.json(departments);
    });
};

const create = (req,res) => {
    const d = new Department ({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });
    d.save().then(() => {
        res.json({
            message:"department created"
        });
    });
}

const getOne = (req, res) => {
    Department.findById(req.params.departmentId, (err, departments) => {
        res.json(departments);
    });
}

const deleteDep = (req, res) => {
    Department.deleteOne({_id: req.params.departmentId}, (err) => {
        res.json({
            message:"department deleted"
        });
    });
}
const updateDepartment = (req, res) => {
    Department.updateOne({_id: req.params.departmentId}, {
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    },
        (err) => {
        res.json({
            message: "department updated"
        });

    });
}


module.exports = {
    list,
    create,
    getOne,
    deleteDep,
    updateDepartment
}

