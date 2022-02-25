import Avatar from "../models/Avatar";

class AvatarUpload{

    async upload(fileExists, id, type, path) {
        if (fileExists) {
            fileExists.name = path;
            fileExists.path = path;
            fileExists.type = type;
            const file = await fileExists.save();
            return file;
        }
        const file = await Avatar.create({
            name: path,
            path,
            type,
            id_contact: id
        });
        return file;
    };
}

export default new AvatarUpload();
