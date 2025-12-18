

## Backend Integration

This project is integrated with a medical AI backend service. The backend URL is configured in `src/lib/config.ts` and can be customized using environment variables.

### Backend Configuration

- **Default Backend URL**: `https://med-ai-backend-2-sc17.onrender.com`
- **Configuration File**: `src/lib/config.ts`
- **API Service**: `src/lib/api.ts`

### Environment Variables

You can override the backend URL using the `VITE_BACKEND_URL` environment variable:

```bash
# Create a .env file in the project root
VITE_BACKEND_URL=https://your-custom-backend-url.com
```

### API Endpoints

- **Chat**: `POST /chat` - Send medical questions and receive AI responses
- **Health**: `GET /health` - Check backend service status

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/57748099-ab73-4b9b-9dbf-67ce1b64e324) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/57748099-ab73-4b9b-9dbf-67ce1b64e324) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

