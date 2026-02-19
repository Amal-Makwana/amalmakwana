# Amal Makwana - Personal Site

This is a Next.js portfolio/personal website with an AI chatbot that answers only questions about Amal Makwana.

## Run locally

### Prerequisites
- Node.js 20.x
- npm
- OpenAI API key

### Environment variables
Create a `.env.local` file in the project root:

```bash
OPENAI_API_KEY=your_openai_api_key
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
- Server creates chunks from sections and embeds them using OpenAI embeddings.
- Query retrieval uses in-memory cosine similarity over cached embeddings.
- `/api/chat` returns responses constrained to Amal-specific context.
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
