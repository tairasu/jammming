# Jammming

## Overview

Jammming is a web application designed to showcase the usage of Spotify's Web API. The app allows users to search for songs, add them to a custom playlist, and save the playlist directly to their Spotify profile. This project demonstrates how to integrate with Spotify's API to provide a seamless music management experience.

## Features

- **User Authentication**: Securely authenticate users via Spotify's OAuth 2.0.
- **Search Songs**: Search for songs using Spotify's search endpoint.
- **Create Playlists**: Create custom playlists by adding selected songs.
- **Save Playlists**: Save the created playlists directly to the user's Spotify profile.

## Technologies Used

- **Frontend**: React.js
- **Backend**: None (All interactions are directly with Spotify's API)
- **API**: Spotify Web API
- **Authentication**: OAuth 2.0

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Spotify Developer account
- A registered application on the Spotify Developer Dashboard

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tairasu/jammming.git
   cd jammming
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Spotify Client ID and Redirect URI:
   ```env
   REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
   REACT_APP_REDIRECT_URI=http://localhost:3000 (or change it to your host)
   ```

### Running the App

1. **Start the development server**:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Deployment

To deploy the app, ensure your `redirectUri` in `Spotify.js` is set to your production URL. Then, build and deploy the app using your preferred hosting service (e.g., Vercel, Netlify, GitHub Pages).

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Deploy the `build` directory to your hosting service**.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.