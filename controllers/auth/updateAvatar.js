const {User}=require('../../models/user');
const fs=require("fs/promises");
const path=require("path");

const avatarsDir=path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res)=>{
    try {
        const {_id: id}=req.user;
    const {filename}=req.file;
    const extension=filename.split(".").reverse()[0];
    const name=`${id}.${extension}`
    const newDir=path.join(avatarsDir, name);
    await fs.rename(req.file.path, newDir);
    const avatarURL = path.join("avatars", name);
    const result = await User.findByIdAndUpdate(req.user._id, {avatarURL}, {new:true})
    res.status(201).json({avatarURL: result.avatarURL})
    } catch (error) {
        if(error.message.includes("no such file or directory")){
            await fs.unlink(req.file.path)
        };
        throw error;
    }
}

module.exports=updateAvatar;