# 🧠 Markdown Presentation App (Backend)

This is the **backend API** for the Markdown Presentation App — a custom-built, minimal clone of PowerPoint where slide content is written in Markdown, parsed to AST, and rendered on the frontend.

This backend provides a RESTful API to store, retrieve, and manage slides, using **Express.js**, **PostgreSQL**, and **Sequelize ORM**.

> 🔗 [Frontend Repo](https://github.com/wiseinvoker/webppt-app)  
> 🔗 [Live Demo (Frontend on Vercel)](https://webppt-app.vercel.app)

## 🛠 Tech Stack

- **Node.js** with **Express.js** — API server
- **PostgreSQL** — Powerful relational DB
- **Sequelize ORM** — Schema & DB layer
- **CORS** + **body-parser** — Middleware
- **dotenv** — Config management

## 🧩 Features

✅ RESTful API for slide data  
✅ CRUD operations  
✅ Persistent storage in PostgreSQL  
✅ Sequelize models and migrations  
✅ API validation and error handling  
✅ Supports Markdown content and metadata  
✅ CORS-enabled for frontend integration

## ⚙️ Environment Setup

### 1. Clone the repo

```bash
git clone https://github.com/wiseinvoker/webppt-api
cd webppt-api
````

### 2. Install dependencies, Database migration

```bash
npm install
npx sequelize-cli db:migrate
```

### 3. Create `.env` file

```env
DATABASE_URL=postgres://localhost:6543/postgres
```

## ▶️ Running the Server

### Start development server:

```bash
npm run dev
```

The API will be available at `http://localhost:5000`.

## 🧪 API Endpoints

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| GET    | `/api/slides`     | Get all slides        |
| GET    | `/api/slides/:id` | Get slide by ID       |
| POST   | `/api/slides`     | Create a new slide    |
| PUT    | `/api/slides/:id` | Update existing slide |
| DELETE | `/api/slides/:id` | Delete a slide        |

### Slide JSON Structure

```json
{
  "title": "Intro to Markdown",
  "content": "# Welcome\nThis is a *Markdown* slide",
  "layout": "default",
}
```


## 🧠 Design Considerations

* PostgreSQL powered by Supabase.
* Sequelize ORM for flexible querying and model relationships.
* Simple REST structure for easy frontend integration.
* Can be swapped for MySQL with config changes.


## 📦 Deployment

> You can deploy this backend to vercel


## 🚀 Related Projects

* [Frontend (React + Vite)](https://github.com/wiseinvoker/webppt-app)
* [Live App on Vercel](https://webppt-app.vercel.app)

## 👤 Author

**wiseinvoker**
GitHub: [@wiseinvoker](https://github.com/wiseinvoker)
Email: [wiseinvoker@gmail.com](mailto:wiseinvoker@gmail.com)
