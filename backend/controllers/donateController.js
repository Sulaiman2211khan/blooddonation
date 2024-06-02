import { Donar } from "../models/donarSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const postDonate = async (req, res) => {
    try {
        const {
            formData,
            user
        } = req.body;
      
        // Destructuring formData
        const {
            gender,
            dob,
            bloodGroup,
            lastDonation,
            address,
            phoneNo,
            city,
            state,
            medicalIllness,
            donationDate
        } = formData;

        // Parse date strings into Date objects
        const parsedDob = new Date(dob);
        const parsedDonationDate = new Date(donationDate);

      
        // Create a new Donar instance
        const newDonar = new Donar({
            user: user.user._id, // Using only user._id
            gender,
            dob: parsedDob,
            bloodGroup,
            lastDonation,
            address,
            phoneNo,
            city,
            state,
            medicalIllness,
            donationDate: parsedDonationDate
        });

        // Save the new Donar instance
        const savedDonar = await newDonar.save();

        res.status(201).json({ savedDonar, message: "Data inserted", success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};
