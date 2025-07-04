# Project Overview: HRMS (Human Resource Management System)

## Introduction
The primary objective of this project is to develop a simple web-based Human Resource Management System (HRMS) that allows employees to apply for leaves and managers to review and manage leave requests efficiently.

---

## Flow of the Project
Login Page → Dashboard → Apply Leave → Manage Leaves → Logout

---

## Module-Wise Explanation

### 1️⃣ Login Page
- The landing page of the system is a simple login interface.
- A company logo (taken from the internet as a .jpg image) is embedded into the login page to give a more personalized and professional appearance.
- Since the current system is built purely on the frontend without any backend support, proper authentication has not been implemented.
- For demonstration purposes, simply clicking the Login button redirects the user to the main dashboard, bypassing any credential verification.

### 2️⃣ Dashboard
- After login, users are redirected to the Dashboard.
- The dashboard has two different views:
  - Employer View (Employee Side)
  - Manager View (Manager Side)
- Ideally, depending on proper authentication during sign-in (once backend is integrated), users would see only their respective views.
- As of now (for demonstration and clarity), both views are accessible for better understanding of both functionalities.

#### ➔ Employer Side Dashboard
- The employee can:
  - View the Apply Leave option.
  - Submit leave requests via a form.
  - View basic leave status updates after submission.

#### ➔ Manager Side Dashboard
- The manager can:
  - Access Manage Leaves section.
  - View all pending leave requests submitted by employees.
  - Approve or Reject leave applications.
  - Updated status gets reflected and stored.

### 3️⃣ Apply Leave Module
- Employees can fill out and submit leave requests.
- The leave request form includes:
  - Employee Name
  - Leave Type (Casual, Sick, etc.)
  - From Date
  - To Date
  - Reason for Leave
- Client-side validation ensures proper data entry before submission.
- Submitted data is stored in the browser's localStorage for persistence.
- Employees also have the option to delete any of their previously applied leave applications or cancel prior leave requests.
- Employees can view their complete leave history, allowing them to track all submitted, approved, rejected, or pending leaves.

### 4️⃣ Manage Leaves Module
- Managers can access all submitted leave applications from employees.
- Each leave request displays relevant details such as employee name, leave type, duration, and reason.
- Managers have the authority to either Approve or Reject any pending leave request.
- Once an action is taken, the corresponding status gets updated and is saved back into the browser's localStorage for persistence.
- Managers can view the complete history of all leave requests and their current statuses.
- Status options: Pending, Approved, Rejected.

### 5️⃣ Logout
- On clicking Logout, the system redirects the user back to the Login Page.
- Since no session management is implemented, logout simply refreshes the state and navigates back.

---

## Technology Stack
- Frontend: HTML, CSS, JavaScript
- Data Storage: Browser localStorage
- Backend: Not implemented (pure frontend prototype)

---

## Key Features
- Minimal and intuitive interface.
- Real-time leave status updates.
- Persistent data using localStorage.
- Modular design for easy extension.
- Personalized login interface with company logo.

---

## Possible Future Enhancements
- User Authentication (Login/Registration with proper credentials)
- Backend Server with Database (SQL/NoSQL integration)
- Leave history, analytics & reporting modules
- Email/SMS notifications for leave actions
- Role-based access controls with multi-user support
- Session management and security implementations

---

## How to Run the Project

### Method 1: Using Deployed Link (Recommended for Demo)
- Simply click on the deployed project link below to directly access the application:  
**Project Live Demo:** *[https://hrmsleave.netlify.app/login]*
- The full functionality of the project can be explored directly through the web browser without any installation or setup.

### Method 2: Running Locally
1. Download or clone the repository.
2. Open the project folder.
3. Double-click index.html to open it in any modern browser.
4. No setup or installation is needed since it's a pure frontend project using localStorage.

## Project Tour: Screenshots, Video Tutorial & Docs

- [📸 Screenshots](https://drive.google.com/drive/folders/1nW9YxioGLRqwD73iMkZ4iZvaKqnP42L6?usp=drive_link)
- [🎥 Video Demo](https://drive.google.com/file/d/1OARtiYdQ_BcGCKBbd1ArT9oYFea1dldA/view?usp=drive_link)
- [📄 Documentation](https://drive.google.com/file/d/1MUEaShEZwG09kzweD1-FqSnS4iKyuVPz/view?usp=drive_link)


## Learning Outcomes
- Learned to design a complete web-based application using HTML, CSS, and JavaScript.
- Gained experience in client-side data storage and management using localStorage.
- Implemented form validation, data handling, and status updates in a multi-module system.
- Understood how to create role-based interfaces for both employees and managers.
- Identified the limitations of frontend-only architecture and areas for future backend integration.

## Internship Completion Certificate
https://drive.google.com/file/d/1DZvaY8DpBb3B3UxBuraUtpX6P8-Uoa3I/view?usp=sharing

## About VeriTech Software IT Services
[VeriTech LinkedIn handle](https://www.linkedin.com/company/veritech-software-it-services-pvt-ltd/posts/?feedView=all)
**Industry**: IT Services and IT Consulting
**Employees**: 50   
**Headquarters**: Pune, Maharashtra, India
**Founded**: 2022
