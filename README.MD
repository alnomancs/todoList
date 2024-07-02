# To-Do List Application

A simple and interactive to-do list application built with HTML, CSS, and JavaScript. Users can add, remove, and mark tasks as completed. Tasks are stored in the browser's local storage to ensure persistence between sessions.

## Live Demo

Check out the live demo of the application [here](https://todolist-alnoman.netlify.app).

## Features

- **Add Tasks**: Users can add new tasks to the list.
- **Remove Tasks**: Users can remove tasks from the list.
- **Mark Tasks as Completed**: Users can mark tasks as completed using checkboxes.
- **Persistent Storage**: Tasks are saved in the browser's local storage, so they persist even after the browser is closed or the page is refreshed.

## Technologies Used

- **HTML**: For the basic structure of the application.
- **CSS**: For styling the application.
- **JavaScript**: For adding interactivity to the application.
- **Local Storage**: For storing tasks persistently.

## Getting Started

### Prerequisites

To run this application, you only need a modern web browser.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/todo-list-application.git
   ```

2. Navigate to the project directory:

   ```sh
   cd todo-list-application
   ```

3. Open `index.html` in your web browser to view the application.

## Usage

1. **Adding a Task**: Enter a task in the input field and click the "Add" button.
2. **Marking a Task as Completed**: Click the checkbox next to a task to mark it as completed. This will strike through the task text.
3. **Removing a Task**: Click the "Remove" button next to a task to delete it from the list.

## Code Overview

### HTML

The HTML file (`index.html`) contains the structure of the application, including the input field, the "Add" button, and the task list.

### CSS

The CSS file (`styles.css`) provides the styling for the application, ensuring it looks clean and user-friendly.

### JavaScript

The JavaScript file (`script.js`) contains the functionality for adding, removing, and marking tasks as completed. It also handles saving and loading tasks from local storage.

### Local Storage

Tasks are saved in local storage in the form of an array of objects, each containing the task text and its completion status. This ensures tasks persist across browser sessions.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- This application was built with inspiration from various to-do list applications and tutorials available online.
