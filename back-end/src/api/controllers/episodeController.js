import Episode from "../models/episode";

//Add episode
const addEpisode = async (req, res) => {
    const newEpisode = new Episode(req.body);
    try {
        const episode = await newEpisode.save();
        res.status(200).json(episode);
    } catch (err) {
        res.status(500).json(err);
    }
}
//get one episode
const getEpisode = async (req, res) => {
    try {
        const { id } = req.params;
        const episode = await Episode.findById(id);
        res.status(200).json(episode);
    } catch (err) {
        res.status(500).json(err);
    }
}
//get all episodes according to course
const getAllEpisodes = async (req, res) => {
    try {
        const { courseId } = req.params;
        const episodes = await Episode.find({ course: courseId });
        res.status(200).json(episodes);
    } catch (err) {
        res.status(500).json(err);
    }
}
//delete episode
const deleteEpisode = async (req, res) => {
    try {
        const { id } = req.params;
        await Episode.findOneAndRemove({ _id: id });
        res.status(200).json({
            status: true,
            message: "deleted successfully"
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}
//update episode
const updateEpisode = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        await Episode.findOneAndUpdate({ id }, { name });
        res.status(200).json({
            status: true,
            message: "updated successfully"
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}
//count episodes according to course
const countEpisodes = async (req, res) => {
    try {
        const { courseId } = req.params;
        const count = await Episode.countDocuments({ course: courseId });
        res.status(200).json(count);
    } catch (err) {
        res.status(500).json(err);
    }
}
//delete all episodes according to course
const deleteAllEpisodes = async (req, res) => {
    try {
        const { courseId } = req.params;
        await Episode.deleteMany({ course: courseId });
        res.status(200).json({
            status: true,
            message: "deleted successfully"
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}


export { addEpisode, getEpisode, getAllEpisodes, deleteEpisode, updateEpisode, countEpisodes, deleteAllEpisodes };