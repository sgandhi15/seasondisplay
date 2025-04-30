# Season Display App

A modern React application that dynamically displays seasonal content based on the user's geographical location. This project demonstrates the practical implementation of React components, geolocation services, and responsive UI design.

## 🌟 Features

- **Real-time Location Detection**: Automatically detects the user's geographical location using the browser's geolocation API
- **Dynamic Season Display**: Shows different content based on the current season in the user's hemisphere
- **Responsive UI**: Clean and intuitive interface with seasonal-themed visuals
- **Error Handling**: Graceful handling of geolocation permissions and errors
- **Loading States**: Smooth loading indicators for better user experience

## 🛠️ Technical Stack

- **Frontend Framework**: React 16.13.1
- **Styling**: CSS with semantic class names
- **Geolocation**: Browser's native Geolocation API
- **Development Tools**:
  - React Scripts
  - Jest for testing
  - ESLint for code quality

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 📱 How It Works

The application:

1. Requests the user's location permission
2. Determines the current season based on:
   - User's latitude
   - Current month
3. Displays season-appropriate content:
   - Summer: Beach-themed content for northern hemisphere summer
   - Winter: Cold-weather themed content for northern hemisphere winter

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 🏗️ Project Structure

- `src/SeasonDisplay.js`: Main component for displaying seasonal content
- `src/index.js`: Application entry point with geolocation logic
- `src/loader.js`: Loading state component
- `src/SeasonDisplay.css`: Styling for the season display
