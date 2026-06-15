import dbConnect from "@/lib/dbConnect";
import Password from "@/lib/models/Password";
import jwt from "jsonwebtoken";

// Helper: verify token and return userId
async function getUserId(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) throw new Error("No token provided");

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.userId;
}

// GET all passwords
export async function GET(req) {
  try {
    await dbConnect();
    const userId = await getUserId(req);

    const passwords = await Password.find({ userId });
    return new Response(JSON.stringify({ passwords }), { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}

// POST new password
export async function POST(req) {
  try {
    await dbConnect();
    const userId = await getUserId(req);

    const body = await req.json();
    const { title, username, password, url, notes } = body;

    if (!title || !password) {
      return new Response(JSON.stringify({ message: "Title and password are required" }), { status: 400 });
    }

    const newPassword = new Password({ userId, title, username, password, url, notes });
    await newPassword.save();

    return new Response(JSON.stringify({ message: "Password saved successfully" }), { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}

// PUT / update password
export async function PUT(req) {
  try {
    await dbConnect();
    const userId = await getUserId(req);

    const body = await req.json();
    const { id, title, username, password, url, notes } = body;

    if (!id || !title || !password) {
      return new Response(JSON.stringify({ message: "ID, title and password are required" }), { status: 400 });
    }

    const updated = await Password.findOneAndUpdate(
      { _id: id, userId },
      { title, username, password, url, notes },
      { new: true }
    );

    if (!updated) return new Response(JSON.stringify({ message: "Password not found" }), { status: 404 });

    return new Response(JSON.stringify({ message: "Updated successfully" }), { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}

// DELETE password
export async function DELETE(req) {
  try {
    await dbConnect();
    const userId = await getUserId(req);

    const { id } = await req.json();
    if (!id) return new Response(JSON.stringify({ message: "ID is required" }), { status: 400 });

    const deleted = await Password.findOneAndDelete({ _id: id, userId });
    if (!deleted) return new Response(JSON.stringify({ message: "Password not found" }), { status: 404 });

    return new Response(JSON.stringify({ message: "Deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
