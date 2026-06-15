import mongoose from "mongoose";

const vaultItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  username: String,
  password: String,  // Encrypted
  url: String,
  notes: String,
});

export default mongoose.models.VaultItem || mongoose.model("VaultItem", vaultItemSchema);
