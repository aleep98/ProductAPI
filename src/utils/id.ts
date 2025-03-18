import mongoose from "mongoose"

export const toObjectId = (id: string) => {
    return new mongoose.Types.ObjectId(id)
}