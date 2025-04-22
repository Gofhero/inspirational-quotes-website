# Inspirational Quotes Website

This is a simple personal website that generates inspirational quotes upon user interaction. The design is relaxed and user-friendly, making it easy to get inspired.

## Project Structure

```
inspirational-quotes-website
├── public
│   └── index.html       # Main HTML document for the website
├── src
│   ├── app.js           # Main JavaScript logic for handling user interactions
│   ├── quotes.js        # Exports an array of inspirational quotes
│   └── styles.css       # CSS styles for the website
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd inspirational-quotes-website
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   You can use a local server to serve the `public/index.html` file. For example, you can use the `live-server` package:
   ```
   npx live-server public
   ```

4. **Open your browser**:
   Navigate to `http://localhost:8080` (or the port specified by your server) to view the website.

## Usage

Click the button on the website to generate a new inspirational quote. The quotes are randomly selected from a predefined list.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or additional features.

## License

This project is open-source and available under the MIT License.