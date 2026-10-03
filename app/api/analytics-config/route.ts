export async function GET() {
  const id = process.env.GA_MEASUREMENT_ID?.trim() || null;
  return Response.json(
    { id },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
