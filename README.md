# Amal Makwana - Personal Site

This is a Next.js portfolio/personal website with an AI chatbot that answers only questions about Amal Makwana.

## Run locally

### Prerequisites
- Node.js 20.x
- npm
- Groq API key

### Environment variables
Create a `.env.local` file in the project root:

```bash
GROQ_API_KEY=your_groq_api_key
```

### Steps
1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app:

```text
http://localhost:3000
```

## AI Chatbot architecture
- `data/knowledge.json` stores structured knowledge.
- Query retrieval uses in-memory lexical similarity over the knowledge chunks.
- `/api/chat` calls Groq via the OpenAI-compatible SDK client.
- Model used: `llama3-8b-8192`.
- Prompt-injection patterns are blocked and unrelated questions return a fixed fallback sentence.

## Useful local commands
- Run tests:

```bash
npm test
```

- Run lint:

```bash
npm run lint
```

- Build:

```bash
npm run build
```
