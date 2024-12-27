
# CollaborateX

CollaborateX is a powerful all-in-one workspace designed to help individuals and teams organize their work, thoughts, and ideas. It is a versatile tool that combines note-taking, task management, and collaboration features.

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
- Within each workspace, users can create multiple files. Each file features a text editor with capabilities for text formatting, add headings, lists, bullet points, images, links, tables, and much more.

![Screenshot (11)](https://github.com/user-attachments/assets/006b7b1c-d4a3-40ea-b611-0523e675a967)

- AI Integration: The text editor integrates with the Google Gemini AI model, allowing users to utilize AI for tasks like generating project progress tracking tables. Users can prompt the AI to create content based on their needs.
e.g) Create a Project progresss tracking table and here is the result

![Screenshot (12)](https://github.com/user-attachments/assets/007c39f1-311c-4aa1-98d2-040f1beec0ea)


- Real-Time Chat: The platform includes a chat feature enabling real-time communication between users within the workspace.

![Screenshot (14)](https://github.com/user-attachments/assets/6a055c22-f96f-4463-9fb4-871f4bc883a5)

- User Invitation: Users can invite others to join the workspace via email for collaborative work.

![Screenshot (8)](https://github.com/user-attachments/assets/65d7515d-2cb4-463e-bdca-65fe9fa1e911)

# 1. What is CollaborateX?
CollaborateX is a productivity tool that allows you to create and manage notes, tasks, projects, in a single platform. It is like a digital notebook that offers flexibility in organizing information. You can use it for a variety of purposes like:
- Personal note-taking
- Project management
- Task lists
- Team collaboration
- Knowledge base (storing resources and information)

# 2. Key Features of CollaborateX
Here are some of the main features that make CollaborateX so popular:

## a) Notes & Documents
- You can create notes and organize them into pages or sections.
- CollaborateX allows you to format text, add headings, lists, bullet points, images, links, tables, and much more.
- It has a rich text editor that is similar to word processors, so writing and editing notes is simple.

## b) Tasks & To-Do Lists
- You can create to-do lists to manage tasks, projects, and goals.
- You can easily track the progress of each task, set deadlines, assign tasks to others, and mark tasks as completed.

## c) Collaboration
- CollaborateX is great for team collaboration. Multiple people can work on the same document, and you can share pages with others to edit or view.
- You can leave comments and tag team members in specific sections to provide feedback.
- It’s easy to organize information, assign tasks, and track progress as a team.

## d) Templates creation using Gemini AI
- In the workspace, users can auto-generate templates using AI for common tasks like meeting notes, project management, project progress tracking, or habit trackers.
- Creating templates helps to save time and maintain consistency across the work.

# 3. How Does CollaborateX Work?
CollaborateX uses a block-based system. This means that everything in CollaborateX, whether it’s text, images, tables, or checklists, is considered a "block". These blocks can be added, moved, or rearranged easily. For example:
- You can add a text block for a note.
- You can add an image block to insert images.
- You can add a table block to create a table.
- You can even add a code block for coding-related content.

Each block can be customized and reorganized, making it flexible for various use cases.

# 4. Why Use CollaborateX?
CollaborateX stands out for a few key reasons:

## a) All-in-One Workspace
- Instead of using different tools for notes, task management, and databases, CollaborateX brings everything together in one place. This makes it easier to stay organized.

## b) Customizable
- CollaborateX’s flexibility allows users to create workflows, layouts, and templates that fit their needs, whether they’re working solo or as a team.

## c) Simplicity and Ease of Use
- CollaborateX’s interface is clean, simple, and easy to navigate. It’s intuitive, so even beginners can start using it quickly.

## d) Collaboration
- Teams can collaborate in real-time, making it an excellent tool for team-based projects. It’s like a virtual office where everyone’s information and updates are in one place.



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
