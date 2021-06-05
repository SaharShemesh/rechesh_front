let api_url = "http://localhost:3000/api/";

function updateOptions(options) {
  const update = { ...options };
  if (localStorage.jwt) {
    update.headers = {
      ...update.headers,
      Authorization: `Bearer ${localStorage.jwt}`,
    };
  }
  return update;
}

export default function fetcher(url, options) {
  return fetch(api_url + url, updateOptions(options)).then((response) =>
    response.json()
  );
}
