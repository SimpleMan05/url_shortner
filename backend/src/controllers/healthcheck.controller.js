
const healthcheck = (req,res) => {

    return res
            .status(200)
            .json({status:200, message:"health is OK"});

}

export {
    healthcheck
};