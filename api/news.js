export default async function handler(req, res) {
  const query = req.query.q || "breaking";
  const apiKey = "197bc47d4b0f472e82848b456e8aff3a";

  const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=6&apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news." });
  }
}
