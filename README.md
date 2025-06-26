# light-it

## Running the Application Locally

1. **Install dependencies**

    Open a terminal in the project root and run:

    ```sh
    npm install
    ```

2. **Start the development server**

    ```sh
    npm run dev
    ```

3. **Open the app in your browser**

    Visit the URL shown in the terminal (usually http://localhost:5173).

---

-   If you encounter issues with dependencies, try deleting `node_modules` and `package-lock.json`, then run
    `npm install` again.
-   The app uses Vite, React, TypeScript, react-hook-form, zod, styled-components, and react-query.
-   No backend or persistent storage is required; all data is in-memory.

## Tech stack decision

-   React query to handle API fetch, loading and error states, caching (if necessary) out of the box
-   Zod for schema validation on user input to add or edit a new Patient
-   React Hook Form to easily handle form validation, submit call, initial values and etra methods as reset
-   Typescript for developer experience. Type checking and autocomplete. Easily identify bugs before production
-   React toastify to manage in app notifications

## Design decision

-   Usage of styled components to build elements from the ground
-   CSS in JS as it allows to add props to the styled component
-   Would like to create a theme and a Provider to manage everything with variables but time was limited
