# ONTrack-Task-Manager
# 🧭 ONTrack — Task Management Simplified

**ONTrack** is a sleek and intuitive web-based task management system designed to keep you productive and organized. It offers a clear three-column workflow — **To Do**, **On Going**, and **Completed** — with real-time Telegram notifications and flexible task controls.

---

## 🚀 Features

- 📝 Create, update, and delete tasks with ease  
- 📌 Three-stage task workflow: To Do → On Going → Completed  
- ⏰ Deadline-based alerts and timely reminders  
- 📲 Telegram bot integration for:
  - Instant task creation alerts  
  - Task status updates  
  - Deadline notifications (24 hrs, 5 hrs, 10 mins before)  
  <!-- - Command-based interaction (`/tasks`, `/today`, `/deadlines`, etc.)   -->
- 📅 Date & time selectors for precise planning  
- ✅ Differentiates “Completed on time” vs. “Completed late”

---

## 📸 UI Overview

- 🟦 **To Do** – Tasks yet to start  
- 🟨 **On Going** – Tasks in progress  
- 🟩 **Completed** – Finished tasks  

Each task card displays:
- Title  
- Description  
- Priority  
- Start Date & End Date  

Hover actions reveal:
- ✏️ Edit  
- ❌ Delete  
- ▶️ Move to On Going / Completed

---

## 🧠 How It Works

1. **Task Creation**  
   - Fill out the form; task appears under **To Do** and a Telegram notification is sent.  
2. **Task Progression**  
   - Use the on‑card buttons to move tasks between **To Do**, **On Going**, and **Completed**.  
3. **Edit Task**  
   - Click ✏️ to open the same task form, prefilled with existing details, then save your updates.  
4. **Deadline Notifications**  
   - The system schedules alerts 24 hrs, 5 hrs, and 10 mins before each task’s end time.  


---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript  
- **Backend**: Django (Python)  
- **Database**: mySQL  
- **Telegram Integration**: Python `requests` + Telegram Bot API  

---

## ⚙️ Setup Instructions

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/ontrack.git
   cd ontrack
