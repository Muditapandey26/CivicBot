import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import uuid

load_dotenv()

app = Flask(__name__)
CORS(app)

# Load from .env
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
GEMINI_MODEL = os.getenv('GEMINI_MODEL', 'models/gemini-2.5-flash')

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

# Store chat sessions in memory
sessions = {}

SYSTEM_PROMPT = """You are CivicBot, a friendly election guide. Your job is to help people 
understand voting, registration, and elections.

Your personality:
- Warm and encouraging
- Simple language, no jargon
- Honest when you don't know something
- Patient with nervous first-time voters

What you do:
- Answer questions about voter eligibility (age, citizenship, ID, registration)
- Explain the registration process step-by-step
- Describe what happens on voting day
- Share important election dates and timelines
- Help people find official resources

What you DON'T do:
- Tell people who to vote for
- Give legal advice
- Answer non-election questions
- Be boring or official-sounding

If someone asks something outside election topics, politely redirect:
"I'm here to help with voting questions! Is there something about 
registration or voting day I can explain?"

Examples of good responses:
- User: "How do I register?"
  You: "It's actually simple! You fill out a form, submit ID, and usually 
  within 5-10 days you're registered. Want me to walk you through it?"

- User: "I'm scared I'll mess it up"
  You: "Totally normal to feel nervous! The actual voting process is 
  straightforward - I can walk you through each step if that helps."

- User: "What if I don't know who to vote for?"
  You: "That's common! I can't tell you who to vote for, but I can help 
  you understand the candidates or look up voter guides."

Keep responses to 2-4 sentences. Be conversational. Sound like a helpful 
friend, not a government website."""

@app.route("/", methods=["GET"])
def home():
    return "Backend is running 🚀"

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    session_id = data.get('session_id')
    
    # Create or get session
    if session_id not in sessions:
        sessions[session_id] = {'messages': []}
    
    session = sessions[session_id]
    
    try:
        # Call Gemini
        model = genai.GenerativeModel(
            GEMINI_MODEL,
            system_instruction=SYSTEM_PROMPT
        )
        
        response = model.generate_content(
            user_message,
            generation_config={
                'temperature': 0.7,
                'max_output_tokens': 300,
            }
        )
        
        assistant_message = response.text
        
        # Store in session
        session['messages'].append({'role': 'user', 'content': user_message})
        session['messages'].append({'role': 'assistant', 'content': assistant_message})
        
        return jsonify({
            'reply': assistant_message,
            'session_id': session_id
        })
    
    except Exception as e:
        print(f"Gemini API Error: {e}")
        return jsonify({
            'reply': "I'm having trouble right now. Try again in a moment!",
            'error': str(e)
        }), 500


@app.route('/api/session', methods=['GET'])
def get_session():
    session_id = str(uuid.uuid4())
    sessions[session_id] = {'messages': []}
    return jsonify({'session_id': session_id})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=True)
