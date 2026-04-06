import { GoogleGenAI } from "@google/genai";

async function searchImages() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find 4 direct image URLs for 'Nike Kyrie 1 Dream' shoe. The URLs should end with .png or .jpg and be high quality. Return them as a JSON array of strings.",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
    },
  });

  console.log(response.text);
}

searchImages();
