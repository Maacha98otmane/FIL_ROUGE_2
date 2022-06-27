import Course from "../models/course";
import Category from "../models/category";

const getCourse = async (req, res) => {

    const { id } = req.params
    try {
        const doc = await Course.find({_id : id});
        return res.status(200).json({
            status : true,
            message : doc
        })
    }catch(err){
        return res.status(400).json({
            status : false,
            message: err.message
        })
    }
    
}

const addCourse = async (req, res) => {
    try {
        const {
            title,
            slug,
            level,
            description,
            price,
            photo,
            hours,
            category,
        } = req.body;
        const course = new Course({
            title,
            slug,
            level,
            description,
            price,
            photo,
            hours,
            category,
        });
        await course.save();
        res.status(200).json({
            status: true,
            message: "course added successfully",
            course,
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

const getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
}
      
const deleteCourse = async (req, res) => {

    try {
        const {
           id,
        } = req.params
  
        await Course.findOneAndRemove({ _id: id })
        res.status(200).json({
           status: true,
           message: "deleted successfully"
        })
     } catch (e) {
        res.status(400).json({
           status: false,
           message: e.message
        })
     }
}

//get 5 random course
const getRandomCourse = async (req, res) => {
    try {
        const courses = await Course.aggregate([
            { $sample: { size: 5 } }
        ]);
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
}

//get course with all episodes
const getCourseWithEpisodes = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id).populate("episodes");
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
}
//get 3 course rating >= 4
const getCourseRating = async (req, res) => {
    try {
        const courses = await Course.find({rating: {$gte: 4}}).limit(3);
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
}

export { getCourse ,getAllCourse, addCourse, deleteCourse, getRandomCourse, getCourseWithEpisodes}
