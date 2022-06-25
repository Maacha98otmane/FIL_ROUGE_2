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

const getAllCourse = async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let courses;
  
      if (qNew) {
        courses = await Course.find().sort({ createdAt: -1 }).limit(1).populate("category").populate("brand").populate("store_id");
      } else if (qCategory) {
        courses = await Course.find({
          category: {
             $in : await Category.findOne({ name: qCategory }).then(category => {
                return category._id;
            })
          },
        }).populate("category").populate("brand").populate("store_id");
      } else {
        courses = await Course.find().populate("category").populate("brand").populate("store_id");   
      }
  
      res.status(200).json(courses);
    } catch (err) {
      res.status(500).json(err);
    }
    
} 

const addCourse = async (req, res) => {

    const newCourse = new Course(req.body);

    try {
      const course = await newCourse.save();
      res.status(200).json(course);
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

const updateCourse = async (req, res) => {

    try {
        const { id } = req.params;
        const { name } = req.body;
        await Course.findOneAndUpdate({id}, {name});

        res.status(200).json({
           status: true,
           message: "updated successfully"
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


export { getCourse ,getAllCourse, addCourse, deleteCourse, updateCourse, getRandomCourse, getCourseWithEpisodes}
