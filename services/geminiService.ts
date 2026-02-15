import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getAyurvedicAdvice = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "Our AI Advisor is currently offline. Please contact us directly for expert advice.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are an expert consultant for "Thapaliya Export & Import", a premium company dealing in Ayurvedic health products from Nepal. 
        Your goal is to educate customers about the benefits of Ayurvedic herbs like Shilajit, Ashwagandha, Cordyceps, and Triphala.
        Maintain a sophisticated, calming, and professional tone. 
        If asked about medical advice, gently remind the user to consult a doctor, but explain the traditional Ayurvedic uses of the products.
        Keep responses concise (under 150 words) unless asked for details.`,
      }
    });

    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently meditating. Please try asking me again in a moment.";
  }
};