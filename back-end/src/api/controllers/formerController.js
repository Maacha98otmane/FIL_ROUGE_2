import Former from "../models/former";
import User from "../models/user";
import EmailSend from "../helpers/email";

const createCustomer = (req, res) => {

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

        const {
            firstName,
            lastName,
            email,
            password,
            address,
            phone,
        } = req.body

        const userData = {
            firstName,
            lastName,
            address : address,
            phone : phone,
            email,
            password,
        }
        
        const customer = await Customer.findOneAndUpdate({ _id: id }, costumerData, { new: true });
        const user = await User.findOneAndUpdate({ _id: id }, userData, { new: true });
        
        return res.status(400).json({
            message: "Customer updated successfully!"
        });
        } catch (e) {
            res.status(400).json({
                status: false,
                message: "Customer not found"
            })
        }
}



const confirmEmail = async (req, res) => {

            try {
            const { id } = req.params;
            await Customer.findOneAndUpdate({id}, {"isVerified":true});

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
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({}).populate('user');
        return res.json({
            customers
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}
//get customer
const getCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findById({ _id: id });
        return res.json({
            customer
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}











export {createCustomer,confirmEmail, deleteCustomer, updateCustomer,getAllCustomers,getCustomer}