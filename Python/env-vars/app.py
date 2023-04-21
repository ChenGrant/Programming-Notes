# need to pip install python-dotenv
from dotenv import load_dotenv
import os

# Load the environment variables from the .env file
load_dotenv()

# Access the environment variables using os.environ.get()
api_key = os.environ.get('API_KEY')

print(api_key)