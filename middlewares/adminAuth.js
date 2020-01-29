const jwt = require('jsonwebtoken');

const AdminAuth = async (req , res, next) => {
    if (req.headers.authorization) {
        //console.log(req.headers.authorization);
        const token = req.headers.authorization.replace('Bearer ', '');
        //console.log(token);
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET );
        //console.log(user._id);
        const user = await User.findById(decodedUser._id).exec();
        if (user.role === 'admin') {
            next();
        } else {
            return res.json({
                success: false,
                message: 'Access forbidden '
            });
        }

    } else {
        return res.json({
            success: false,
            message: 'authorization header required'
        });
    }
}

module.exports = AdminAuth;
