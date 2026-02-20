import { createKnowledgeChunks } from "@/lib/chatbot/knowledge";

const knowledgeChunks = createKnowledgeChunks();

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2);
}

function lexicalSimilarity(query, content) {
  const queryTokens = normalizeText(query);
  const contentTokens = new Set(normalizeText(content));

  if (!queryTokens.length || !contentTokens.size) {
    return 0;
  }

  const matches = queryTokens.reduce(
    (total, token) => total + (contentTokens.has(token) ? 1 : 0),
    0,
  );

  return matches / queryTokens.length;
}

export async function retrieveTopChunks(query, topK = 3) {
  const ranked = knowledgeChunks
    .map((chunk) => ({
      ...chunk,
      score: lexicalSimilarity(query, chunk.content),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  return ranked;
}
