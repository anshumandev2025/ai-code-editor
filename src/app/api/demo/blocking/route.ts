import { generateText } from "ai";
import { google } from "@ai-sdk/google";
export async function POST() {
  const response = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: "Write a short poem about the beauty of technology.",
  });
  return new Response(response.text);
}
