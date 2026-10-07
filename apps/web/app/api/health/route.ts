export function GET() {
  return Response.json({
    service: 'dmly-web',
    status: 'ok',
    readiness: 'scaffold-only',
  });
}
