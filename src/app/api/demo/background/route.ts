import { inngest } from "@/inngest/client";

export async function POST() {
  const data = await inngest.send({
    name: "demo/generate",
    data: {},
  });
  return Response.json({ status: "Event started", data });
}
