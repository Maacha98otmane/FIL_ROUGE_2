import Former from "../models/former";
import User from "../models/user";
import EmailSend from "../helpers/email";

const createFormer = (req, res) => {

    const {
        firstName,
        lastName,
        email,
        password,
        address,
        phone
    } = req.body;

    const UserData = {
        firstName,
        lastName,
        email,
        address,
        phone,
        password,
        role: "FORMER",
    }

    const user = new User(UserData);
    user.save((err, User) => {
        if (err) {
            // logger.error(err);
            return res.status(400).send(err)

        }
        const FormerData = {
            user: user._id,
            _id: user._id, 

        }
        const former = new Former(FormerData);
        former.save(async (err) => {

            if (err) {
                const user = await User.findById({
                    _id: user._id
                })
                user.remove()
                // logger.error(err);
                return res.status(400).send(err)
            }
            
            //Email Verification
            const { id } = user._id;

            let subj = "Information";
            let msg = `confirm_email : http://localhost:3030/api/customer/confirmEmail/${id}`;
            EmailSend.mail(email, subj, msg)
            
            user.hashed_password=undefined
            user.salt=undefined
            
            // logger.info(`Former user:${req.body.username} created!`);
            return res.json({
                user,
                former
            })
        })

    })
}
//delete former
const deleteFormer = async (req, res) => {

    try {
        const {
           id,
        } = req.params
  
        const former = await Former.findById({ _id: id })
        const user = await User.findById({ _id: id })

        former.remove()
        user.remove()
    return res.json({
        message: "Former deleted successfully!"
    });
     } catch (e) {
        res.status(400).json({
           status: false,
           message: "Former not found"
        })
     }

}
// update Former
const updateFormer = async (req, res) => {
    try {
        const {
            id,
        } = req.params

        const former = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
        
        return res.status(400).json({
            message: "Former updated successfully!",
            former
        });
        } catch (e) {
            res.status(400).json({
                status: false,
                message: "Former not found"
            })
        }
}

const confirmFormerEmail = async (req, res) => {

            try {
            const { id } = req.params;
            await User.findOneAndUpdate({id}, {"isVerified":true});

            res.status(200).json({
                status: true,
                message: "Your Account is now Verified"
            })

            } catch (e) {
            res.status(400).json({
                status: false,
                message: e.message
                })
            }
}
//get all customers
const getAllFormers = async (req, res) => {
    try {
        const formers = await Former.find({}).populate('user');
        return res.json({
            formers
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}
//get customer
const getFormer = async (req, res) => {
    try {
        const { id } = req.params;
        const former = await Former.findById({ _id: id }).populate('user');
        return res.json({
            former
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}
//update rating
const updateRating = async (req, res) => {
    try {
        const { id } = req.params;
        const { rating } = req.body;
        const former = await Former.findById({ _id: id });
        former.rating = rating;
        former.save();
        return res.json({
            former
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}
//get all formers by rating >=4
const getTopFormersByRating = async (req, res) => {
    try {
        const topFormers = await Former.find({ rating: { $gte: 4 } }).populate('user');
        return res.json({
            topFormers
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}
//count formers
const countFormers = async (req, res) => {
    try {
        const count = await Former.countDocuments();
        return res.json({
            count
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}

export {createFormer,confirmFormerEmail, deleteFormer, updateFormer,getAllFormers,getFormer,getTopFormersByRating,updateRating,countFormers}