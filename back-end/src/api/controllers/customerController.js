import Customer from "../models/customer";
import User from "../models/user";
import EmailSend from "../helpers/email";
import Order from "../models/order";


const createCustomer = (req, res) => {
    console.log(req.body)
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
        role: "CUSTOMER",
    }

    const user = new User(UserData);
    user.save((err, User) => {
        if (err) {
            // logger.error(err);
            return res.status(400).send(err)

        }
        const CostumerData = {
            user: user._id,
            _id: user._id, 

        }
        const costumer = new Customer(CostumerData);
        costumer.save(async (err) => {

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
            
            // logger.info(`Costumer user:${req.body.username} created!`);
            return res.json({
                user,
                costumer
            })
        })

    })
}
//delete customer
const deleteCustomer = async (req, res) => {

    try {
        const {
           id,
        } = req.params
  
        const customer = await Customer.findById({ _id: id })
        const user = await User.findById({ _id: id })

        customer.remove()
        user.remove()
    return res.json({
        message: "Customer deleted successfully!"
    });
     } catch (e) {
        res.status(400).json({
           status: false,
           message: "Customer not found"
        })
     }

}

// update user
const updateCustomer = async (req, res) => {
    try {
        const {
            id,
        } = req.params

        const {
            firstName,
            lastName,
            email,
            password,
            Address,
            city,
            zipCode,
            phone,
        } = req.body

        const costumerData = {
            Address : Address,
            city : city,
            zipcode : zipCode,
            phone : phone
        }

        const userData = {
            firstName,
            lastName,
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