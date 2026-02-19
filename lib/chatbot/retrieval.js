import { createKnowledgeChunks } from "@/lib/chatbot/knowledge";

const EMBEDDING_MODEL = "text-embedding-3-small";
const knowledgeChunks = createKnowledgeChunks();

let cachedChunkEmbeddings = null;

function cosineSimilarity(a, b) {
  let dot = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    magnitudeA += a[i] * a[i];
    magnitudeB += b[i] * b[i];
  }

  if (!magnitudeA || !magnitudeB) {
    return 0;
  }

  return dot / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
}

async function embedTexts(texts, apiKey) {
  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: EMBEDDING_MODEL,
      input: texts,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Embedding request failed: ${response.status} ${message}`);
  }

  const payload = await response.json();
  return payload.data.map((item) => item.embedding);
}

async function ensureChunkEmbeddings(apiKey) {
  if (cachedChunkEmbeddings) {
    return cachedChunkEmbeddings;
  }

  const embeddings = await embedTexts(
    knowledgeChunks.map((chunk) => chunk.content),
    apiKey,
  );

  cachedChunkEmbeddings = knowledgeChunks.map((chunk, index) => ({
    ...chunk,
    embedding: embeddings[index],
  }));

  return cachedChunkEmbeddings;
}

export async function retrieveTopChunks(query, apiKey, topK = 3) {
  const [queryEmbedding] = await embedTexts([query], apiKey);
  const chunkEmbeddings = await ensureChunkEmbeddings(apiKey);

  const ranked = chunkEmbeddings
    .map((chunk) => ({
      ...chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  return ranked;
}
