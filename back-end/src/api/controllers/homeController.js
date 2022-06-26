import customer from '../models/customer';
import course from '../models/course';
 //get 4 random course with rating >= 4 and get 6 customer with rating >= 4
const getRandomCourse = async (req, res) => {
    try {
        const courses = await course.aggregate([
            { $sample: { size: 4 } },
            { $match: { rating: { $gte: 4 } } }
        ]);
        const customers = await customer.aggregate([
            { $sample: { size: 6 } },
            { $match: { rating: { $gte: 4 } } }
        ]);
        data = {
            courses,
            customers
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}