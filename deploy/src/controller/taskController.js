const Task = require('../model/taskModel')
const User = require('../model/user')



exports.Summary = async (req, res) => {
    try {
        const email = req.email
        const data = await Task.aggregate([
            {$match:{email:email}},
            {$group:{_id:"$status",sum:{$count: {}}}}
        ])
        res.status(200).json({ summary: data })

    } catch (err) {
        console.error(err)
        res.status(500).json({ message: err.message })
    }
}






// user data create
exports.Create = async (req, res) => {
    try {
        const { task, desc, status } = req.body

        const emailExists = await User.findOne({ email: req.email})
        if(emailExists){
            const taskModel = new Task({ task, desc, status, email: req.email, user: req.userId })
            const savedata = await taskModel.save()
            await User.updateOne({ _id: req.userId }, { $push: { todos: savedata._id } })
            res.status(201).json({ Message: "Record Create successful" })
        }else{
            res.status(201).json({ Message: "User Not valied" }) 
        }

    } catch (err) {
        console.log("Server Side err!")
        res.status(500).json({ Message: err.message })
    }
}



// user data read
exports.Readdata = async (req, res) => {
    try {
        let { status } = req.params;
        const email = req.email
        const userdata = await Task.aggregate([
            {
                $match: {
                    email: email, status: status
                }
            },
            {
                $project: {
                    task: 1, desc: 1, status: 1, createdAt: {
                        $dateToString: {
                            date: "$createdAt",
                            format: "%d-%m-%Y"
                        }
                    }
                }
            }
        ])
        res.status(201).json({ data: userdata })

    } catch (err) {
        console.log("Server Side err!")
        res.status(500).json({ Message: err.message })
    }
}


// user data update
exports.UpdateTask = async (req, res) => {
    try {
        const id = req.params.id
        const { status } = req.body

        const userexits = await Task.findOne({ _id: id })
        if (userexits) {
            await Task.updateOne({ _id: id }, { $set: { status } })
            res.status(202).json({ Message: "Status Update successful" })
        } else {
            res.status(404).json({ Message: "User not found" })
        }


    } catch (err) {
        console.log("Server Side err!")
        res.status(505).json({ Message: "server side err!" })
    }
}


// user data delete
exports.Deletadata = async (req, res) => {
    try {
        const id = req.params.id

        const userexits = await Task.findOne({ _id: id })
        if (userexits) {
            await Task.deleteOne({ _id : id })
            res.status(202).json({ Message: "Record delete successful" })
        } else {
            res.status(404).json({ Message: "User not found" })
        }

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ Message: err.message })
    }
}



// Active status
exports.status = async (req, res) => {
    try {
        const status = req.params.status
        const userid = req.userId
        await Crud.find({ user: userid, status }, { title: 1, desc: 1, status: 1, _id: 0 })
            .then((data) => res.status(200).json({ Result: data }))

    } catch (err) {
        console.log("Server Side err!")
        res.status(500).json({ Message: "server side err!" })
    }
}



exports.ReadDate = async (req, res) => {
    try {
        const { FromDate, ToDate } = req.body
        if (!FromDate || !ToDate) {
            res.status(404).json({ Message: "Pls! Proper date full fill" })
        }

        const userid = req.userId
        await Crud.find({ user: userid, createdAt: { $gte: FromDate, $lte: ToDate } }, { title: 1, desc: 1, status: 1, _id: 0 })
            .then((data) => res.status(200).json({ Result: data }))

    } catch (err) {
        console.log("Server Side err!")
        res.status(500).json({ Message: "server side err!" })
    }
}