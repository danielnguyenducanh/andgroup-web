/**
 * Lỗi phía máy chủ (render/route handler) -> Telegram CMO (CT duyệt 28/10/2026).
 */
export async function onRequestError(
  error: unknown,
  request: { path: string; method: string; headers: Record<string, string | string[] | undefined> },
  context: { routerKind: string; routePath: string; routeType: string },
) {
  try {
    const { sendErrorAlert } = await import('./lib/errorAlert');
    const e = error as Error & { digest?: string };
    const ua = request.headers['user-agent'];
    await sendErrorAlert({
      kind: 'server',
      name: e?.name,
      message: `${e?.message || String(error)} [${request.method} ${context.routePath} ${context.routeType}]`,
      stack: e?.stack,
      url: request.path,
      digest: e?.digest,
      ua: Array.isArray(ua) ? ua[0] : ua,
    });
  } catch {
    /* không để việc báo lỗi gây lỗi */
  }
}
