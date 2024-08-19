
# CollaborateX

CollaborateX is a collaborative platform designed to enhance team productivity by enabling users to plan, create, and edit workspaces in real-time.

![Screenshot (4)](https://github.com/user-attachments/assets/5641747e-d05e-4145-b878-dac69049fb37)


## Authentication page
Upon launching CollaborateX, users are greeted by an authentication page powered by Clerk. Once authenticated, users are redirected to the dashboard.

![Screenshot (9)](https://github.com/user-attachments/assets/d0df27e0-3115-40cd-9a22-206d19cd4d88)


## Dashboard page
The dashboard displays a list of workspaces created by the user. From here, users can create new workspaces or edit existing ones.

![Screenshot (10)](https://github.com/user-attachments/assets/6887dacf-6db4-4b1e-87d3-24cd22a926c6)


Users can create a new workspace by naming it and choosing an emoji. After creation, they are redirected to the new workspace.

![Screenshot (7)](https://github.com/user-attachments/assets/3029ef34-f16a-446f-b995-88dad4734391)
## Workspace Page
- Within each workspace, users can create multiple files. Each file features a text editor with capabilities for text formatting, tables, ordered and unordered lists, and image insertion.

![Screenshot (11)](https://github.com/user-attachments/assets/006b7b1c-d4a3-40ea-b611-0523e675a967)

- AI Integration: The text editor integrates with the Google Gemini AI model, allowing users to utilize AI for tasks like generating project progress tracking tables. Users can prompt the AI to create content based on their needs.
e.g) Create a Project progresss tracking table and here is the result

![Screenshot (12)](https://github.com/user-attachments/assets/007c39f1-311c-4aa1-98d2-040f1beec0ea)


- Real-Time Chat: The platform includes a chat feature enabling real-time communication between users within the workspace.

![Screenshot (14)](https://github.com/user-attachments/assets/6a055c22-f96f-4463-9fb4-871f4bc883a5)

- User Invitation: Users can invite others to join the workspace via email for collaborative work.

![Screenshot (8)](https://github.com/user-attachments/assets/65d7515d-2cb4-463e-bdca-65fe9fa1e911)
## Problem statement


- Ineffective Collaboration: Teams struggle with tools that do not support real-time updates or easy sharing of workspaces, leading to miscommunication and inefficiencies.

- Limited Functionality in Text Editing: Conventional text editors lack advanced features like AI-powered assistance for creating and managing content, which can slow down project progress.

- Difficulty in Managing Workspaces: Users need a streamlined way to organize and access multiple workspaces and files, which is often cumbersome in traditional systems.

- Enhance teams Productivity

- Lack of Integrated Communication: Teams require integrated communication tools to facilitate discussions and ensure everyone is on the same page.
## Tech Stack

- React
- Tailwindcss
- Nextjs
- Shadcn
- Firebase => Realtime database
- Clerk => Authentication & Oraganization management
- Liveblocks => Real-time comments & Notification
- Google Gemini API => Content creation
- Editor.js => Rich text Editor


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
  npm run dev
```
    
## Setup Environment variable


Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=""

NEXT_PUBLIC_MAX_FILE_COUNT=5

NEXT_PUBLIC_LIVEBLOCK_PK=""

LIVEBLOCK_SK=

NEXT_PUBLIC_GEMINI_API_KEY=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)



## Authors

Follow me Thank You 😊

- [@Deadlybhoot](https://www.github.com/Deadlybhoot)
- https://www.linkedin.com/in/akshay-satav-0610741a9
