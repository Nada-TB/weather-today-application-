# Weather Today

## Introduction

"Weather Today" is a web application that allows users to check the current weather in their chosen city. The application retrieves weather data from the OpenWeatherMap API and displays the results dynamically on the web page. Users can enter a city name, submit the form, and receive real-time weather information including temperature, humidity, wind speed, and weather description.

## Demo
### Live demo
https://github.com/user-attachments/assets/d75a9a3e-fa52-41db-be13-d8729b21cc21

![Weather Today Demo](https://github.com/Nada-TB/weather-today-application-/blob/master/Weather_Today.png)


## Requirements

- A web server with PHP support (e.g., Apache, Nginx)
- A valid API key for the OpenWeatherMap API
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

## Installation

1. **Download the Project:**
   - Clone or download the project repository.

2. **Setup Web Server:**
   - Ensure your web server supports PHP.
   - Place the project files in the web server's root directory.

3. **Get API Key:**
   - Sign up for an API key from [OpenWeatherMap](https://openweathermap.org/api).
   - Replace the placeholder in `get_weather.php` with your actual API key.

4. **Access the Application:**
   - Open your web browser and navigate to `http://localhost/your-project-folder`.

## Usage

1. **Enter a City:**
   - Type the name of the city in the input field (e.g., "Paris").

2. **Get Weather Information:**
   - Click the "Get the Weather" button to fetch weather data for the entered city.

3. **View Results:**
   - The application displays weather details, including temperature, humidity, wind speed, and a weather icon.

4. **Reset Form:**
   - After viewing the weather, the form will reset automatically for a new query.

## Features

- **Real-Time Weather Data:** Fetches and displays current weather information for any city.
- **Dynamic Updates:** Uses JavaScript and AJAX to update the weather information without reloading the page.
- **Error Handling:** Validates user input and provides error messages if the input is invalid.
- **Responsive Design:** Adapts the interface to different screen sizes for improved usability.

## Technologies Used

- **HTML:** For structuring the web page.
- **CSS:** For styling and layout of the weather interface.
- **JavaScript:** For handling user interactions and updating the UI dynamically.
- **PHP:** For server-side logic and communication with the OpenWeatherMap API.
- **AJAX:** For asynchronous communication between client and server.

## Project Structure

```plaintext
your-repo-name/
├── index.html              # Main HTML file for the weather application
├── style.css               # CSS file for styling the application
├── main.js                 # JavaScript file for handling user interactions and AJAX requests
├── class_form.js           # JavaScript file containing the Form class for form validation
├── get_weather.php         # PHP script for fetching weather data from the OpenWeatherMap API
├── composer.json           # Composer configuration file (if applicable)
└── README.md               # Project documentation
```

## Challenges and Learnings

1. **Hiding API Key:**
   - **Challenge:** Securing the API key to prevent exposure in public repositories.
   - **Solution:** Used server-side PHP to handle API requests, keeping the key hidden from the client-side code.

2. **Enhancing Performance:**
   - **Challenge:** Optimizing the loading and display of weather data to improve user experience.
   - **Solution:** Implemented asynchronous requests with AJAX to fetch and render weather data efficiently.

## Future Improvements

- **Error Handling:** Improve error handling for cases where the API might return errors or the city name might be invalid.
- **UI Enhancements:** Refine the user interface and add more styling options for a more polished look.
- **Additional Features:** Include more weather details (e.g., forecast) or allow users to search for multiple cities at once.

## Contact

- GitHub: [Nada-TB](https://github.com/Nada-TB)

## License
This project is licensed under the MIT License. See the LICENSE file for details.





