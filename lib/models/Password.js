import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },       
  username: { type: String },
  password: { type: String, required: true },
  url: { type: String },
  notes: { type: String },
});

// Avoid model overwrite on hot reload
const Password = mongoose.models.Password || mongoose.model("Password", PasswordSchema);

export default Password;
