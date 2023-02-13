import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNo: { type: Number, require: true, unique: true },
    whatsapp: { type: Number, unique: true },
    telegram: { type: Number, unique: true },
    imessage: { type: Number, unique: true },
    isAdmin: { type: Boolean, default: false, required: true },
    userRegistered: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
