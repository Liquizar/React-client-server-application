# 🚀 React Client-Server Application

Welcome to our React client-server application! This application allows users to input their basic details via an interactive UI and store them on the server. It features a sleek and user-friendly design along with smooth functionality. 💻🌟

## 📋 Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [How to Run](#how-to-run)
  - [Prerequisites](#prerequisites)
  - [Running the Server](#running-the-server)
  - [Running the Client](#running-the-client)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive UI for user input
- Popup notifications for successful or unsuccessful data submission
- Client-server architecture for data storage and retrieval
- Easy to deploy on Azure or any other cloud platform

## Folder Structure
client/
  - src/
    - components/
      - UserForm.js
      - Popup.js
    - App.js
    - App.css
    - index.js

server/
  - index.js
  - package.json

README.md

## How to Run

### Prerequisites

- Node.js installed on your system
- Clone the repository to your local machine 🖱️💻

### Running the Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```

### Running the Client

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the client:
   ```bash
   npm start
   ```

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Fill in the user details in the form.
3. Click the "Submit" button to store the details on the server.
4. Check the popup notification for the status of the submission.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any improvements or enhancements you'd like to see in the application. 🙌🚀

---

Happy building! 🎉🎈
