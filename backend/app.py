import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS correctly for React frontend

# Configure Gemini
API_KEY = os.environ.get("GEMINI_API_KEY")
MODEL_NAME = os.environ.get("GEMINI_MODEL", "gemini-2.5-flash")

if API_KEY:
    genai.configure(api_key=API_KEY)

@app.route("/", methods=["GET"])
def home():
    return "Backend is running 🚀"

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    
    # Validate input
    if not data or "message" not in data:
        return jsonify({"error": "Bad request: 'message' is required"}), 400

    user_message = data["message"]

    try:
        # Send message to Gemini API
        model = genai.GenerativeModel(MODEL_NAME)
        response = model.generate_content(user_message)
        
        return jsonify({"reply": response.text})
        
    except Exception as e:
        print(f"Gemini API Error: {e}")
        # Fallback message if Gemini fails
        return jsonify({"reply": "I'm currently experiencing technical difficulties. Please check official sources for now."})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
