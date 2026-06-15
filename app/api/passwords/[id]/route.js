import dbConnect from "@/lib/dbConnect";
import Password from "@/lib/models/Password";
import jwt from "jsonwebtoken";

// Update (PUT)
export const PUT = async (req, context) => {
  const { params } = await context; // ✅ Await params
  const { id } = params;

  await dbConnect();

  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return new Response(JSON.stringify({ message: "No token provided" }), { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  const body = await req.json();
  const { title, username, password, url, notes } = body;

  try {
    const updated = await Password.findOneAndUpdate(
      { _id: id, userId },
      { title, username, password, url, notes },
      { new: true }
    );

    if (!updated) {
      return new Response(JSON.stringify({ message: "Password not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Updated successfully" }), { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
};

// Delete (DELETE)
export const DELETE = async (req, context) => {
  const { params } = await context; // ✅ Await params
  const { id } = params;

  await dbConnect();

  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return new Response(JSON.stringify({ message: "No token provided" }), { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  try {
    const deleted = await Password.findOneAndDelete({ _id: id, userId });

    if (!deleted) {
      return new Response(JSON.stringify({ message: "Password not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
};
