export default async function handler(req, res) {
  if (req.method === "GET") {
    const coords = req.query.q.split(" ").join("+");
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${coords}&key=${process.env.OPENCAGEDATA_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  }
}
