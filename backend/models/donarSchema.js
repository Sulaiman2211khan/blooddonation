import mongoose from "mongoose";

const donarSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    lastDonation: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    medicalIllness: {
        type: String,
        required: false // Assuming this is optional
    },
    donationDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });

export const Donar = mongoose.model("Donar", donarSchema);
