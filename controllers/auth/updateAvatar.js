const {User}=require('../../models/user');
const fs=require("fs/promises");
const path=require("path");

const avatarsDir=path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res)=>{
    try {
    const {filename}=req.file;
    console.log(filename);
    const newDir=path.join(avatarsDir, filename);
    await fs.rename(req.file.path, newDir);
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(req.user._id, {avatarURL}, {new:true})
    // const newUser={
    //     ...req.body, avatarURL
    // };
    res.status(201).json(avatarURL)
    console.log(avatarURL);
    } catch (error) {
        if(error.message.includes("such file or directory")){
            await fs.unlink(req.file.path)
        };
        throw error;
    }
    
}

module.exports=updateAvatar;