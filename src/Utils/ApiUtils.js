export function request(
  url,
  method,
  options = {
    headers: {
      "Content-Type": "application/json",
    },
  }
) {
  return fetch(url, {
    method,
    ...options,
  }).then(async (resp) => {
    const status = resp.status;

    return {
      data: await resp.json(),
      status,
    };
  });
}
