import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({

    videoFile: {
        type: String,
        required:[true,"video  is required"]
    },
    thumbnail: {
        type: String,
        required: [true, "thumbnail  is required"]
    },
    title: {
        type: String,
        required: [true, "title  is required"]
    },
    description: {
        type: String,
        required: [true, "description  is required"]
    },
    duration: {
        type: Number,
        required: [true, "video  is required"]
    },
    views: {
        type: Number,
        default: 0,
        
    }
    ,
    isPublished: {
        type: Boolean,
        default:true,
    },
    onwer: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },

}, {
    timestamps: true
})

mongoose.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)