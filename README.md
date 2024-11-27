# User Form with Validation

This project is a user form with validation, allowing users to input their personal details. It includes a form with fields for name, username, email, phone number, address, and company details. The form also validates the data before submission and shows error messages if any fields are incorrect.

## Features:
- Input fields with validation for name, username, email, phone number, address, and company.
- Error messages displayed next to the fields that are invalid.
- Prevents form submission if there are validation errors.
- Responsive design for both mobile and desktop screens.

## Tech Stack:
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Hooks**: Used for state management and lifecycle methods.

## Setup and Installation

To get the project up and running locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/repo-name.git
```

Replace `your-username` and `repo-name` with your GitHub username and the repository name.

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies.

```bash
cd repo-name
npm install
```

### 3. Run the Application

After the dependencies are installed, run the application with the following command:

```bash
npm run dev
```

This will start the development server and you can view the application in your browser at [http://localhost:3000](http://localhost:3000).

### 4. Build the Application (Optional)

If you want to create a production build of the application, use the following command:

```bash
npm run build
```

This will create a `build` directory with all the production-ready files.

## Usage

1. **Add New User**: Click the "Add User" button to open the form where you can enter user details.
2. **Edit User**: Click the edit icon on an existing user to edit their details.
3. **Delete User**: Click the delete icon on an existing user to remove them from the list.
4. **Form Validation**: If any fields are empty or contain invalid data, the form will show error messages and prevent submission.

## Challenges Faced

- **State Management for Form Data**: Initially, managing the form state with nested objects (like address and company details) was a bit tricky. I had to ensure that each change was appropriately reflected without overwriting other parts of the state.
  
- **Validation Logic**: Implementing both required field validation and regex validation for email and phone numbers was a bit challenging, especially ensuring that the error messages were shown in real time and the form was not submitted unless valid.
  
- **Responsive Design**: Ensuring the form and modal were fully responsive across mobile and desktop was a challenge. Tailwind CSS made this easier, but there were still some quirks with positioning and scaling.

## Improvements for Future

- **Better Form Field Validation**: While the current validation checks for required fields and basic regex validation, it could be improved by adding more specific checks (e.g., phone number length by country, specific email domain validation).
  
- **Dynamic Input Fields**: Currently, the form only accepts fixed fields. If given more time, I would add the functionality to allow users to dynamically add or remove address fields or company details.

- **Form Reset**: After form submission, the fields could be cleared, or the form could reset to default values.
  
- **Testing**: Implementing unit and integration tests using libraries like Jest and React Testing Library would improve the reliability of the application.

