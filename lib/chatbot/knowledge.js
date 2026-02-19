import knowledgeData from "@/data/knowledge.json";

const CHUNK_MAX_CHARS = 900;

function normalizeText(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string") {
    return value.trim();
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => normalizeText(item))
      .filter(Boolean)
      .join(" ");
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .map(([key, nestedValue]) => `${key}: ${normalizeText(nestedValue)}`)
      .join(" ")
      .trim();
  }

  return String(value);
}

function buildSectionChunks(sectionName, sectionValue) {
  if (Array.isArray(sectionValue)) {
    return sectionValue
      .map((item, index) => {
        const content = normalizeText(item);

        if (!content) {
          return null;
        }

        return {
          id: `${sectionName}-${index}`,
          section: sectionName,
          content: `Section: ${sectionName}. ${content}`.slice(0, CHUNK_MAX_CHARS),
        };
      })
      .filter(Boolean);
  }

  const content = normalizeText(sectionValue);

  if (!content) {
    return [];
  }

  return [
    {
      id: `${sectionName}-0`,
      section: sectionName,
      content: `Section: ${sectionName}. ${content}`.slice(0, CHUNK_MAX_CHARS),
    },
  ];
}

export function createKnowledgeChunks() {
  return Object.entries(knowledgeData).flatMap(([sectionName, sectionValue]) =>
    buildSectionChunks(sectionName, sectionValue),
  );
}
