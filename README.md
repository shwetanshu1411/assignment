

 Project Overview
This is a React-based User Management System that allows users to:
- Authenticate (Login) with credentials.
- View a paginated list of users.
- Edit user details.
- Delete users.

The project utilizes the ReqRes API as a mock backend.

---

 Features Implemented
 Level 1: Authentication (Login Page)
- Users log in using the credentials:
  - Email: `eve.holt@reqres.in`
  - **Password:** `cityslicka`
- Uses `POST /api/login` for authentication.
- Stores the returned authentication token in **localStorage**.
- On successful login, users are redirected to the **Users List Page**.

 Level 2: List All Users
- Fetches users from `GET /api/users?page=1`.
- Displays users with:
  - First Name
  - Last Name
  - Avatar (Profile Image)
- Implements pagination to navigate through different pages.

 Level 3: Edit, Delete, and Update Users
- Each user has Edit and Delete buttons.
- Edit Functionality:
  - Clicking Edit opens a form pre-filled with user data.
  - Updates user details via `PUT /api/users/{id}`.
- Delete Functionality:
  - Clicking Delete removes a user.
  - Uses `DELETE /api/users/{id}`.

---

 Tech Stack Used
-Frontend: React.js
- State Management: React Hooks (`useState`, `useEffect`, `useContext`)
- Routing: React Router
- HTTP Requests: Axios
- UI Framework: Tailwind CSS / Custom CSS
- Mock API: [ReqRes](https://reqres.in/)

---
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Project
```bash
npm start
```
The app will run at `http://localhost:3000/`.

---

## 📂 Project Structure
```
📦 src/
├── components/
│   ├── UserCard.jsx       # Displays user details
│
├── pages/
│   ├── LoginPage.jsx      # User login page
│   ├── UsersPage.jsx      # Displays list of users
│   ├── EditUserPage.jsx   # Edit user details
│
├── services/
│   ├── api.js             # Handles API requests (Login, Fetch, Edit, Delete)
│
├── context/
│   ├── AuthContext.js     # Manages authentication state
│
├── App.js                 # Main application file
├── index.js               # Entry point of React app
```

---

## 🔥 API Endpoints Used
| Action | Method | Endpoint |
|--------|--------|------------------|
| **Login** | `POST` | `/api/login` |
| **Get Users** | `GET` | `/api/users?page=1` |
| **Edit User** | `PUT` | `/api/users/{id}` |
| **Delete User** | `DELETE` | `/api/users/{id}` |

---



-

