import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const owner = "wnzid";
const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "wnzid-portfolio-stack-refresh",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) throw new Error(`GitHub API ${response.status}: ${path}`);
  return response.json();
}

const repositories = await github(`/users/${owner}/repos?per_page=100&type=owner&sort=updated`);
const authoredRepositories = repositories.filter((repository) => !repository.fork && !repository.archived);
const totals = new Map();

for (let index = 0; index < authoredRepositories.length; index += 8) {
  const batch = authoredRepositories.slice(index, index + 8);
  const languageSets = await Promise.all(batch.map((repository) => github(`/repos/${owner}/${repository.name}/languages`)));
  for (const languageSet of languageSets) {
    for (const [language, bytes] of Object.entries(languageSet)) {
      totals.set(language, (totals.get(language) ?? 0) + bytes);
    }
  }
}

const totalBytes = [...totals.values()].reduce((sum, bytes) => sum + bytes, 0);
const languages = [...totals.entries()]
  .sort((left, right) => right[1] - left[1])
  .slice(0, 12)
  .map(([name, bytes]) => ({ name, share: Number(((bytes / totalBytes) * 100).toFixed(1)) }));

const payload = {
  generatedAt: new Date().toISOString(),
  repositoryCount: authoredRepositories.length,
  languages,
};

const output = resolve("data/github-stack.json");
await mkdir(dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Updated ${output} from ${authoredRepositories.length} public source repositories.`);
