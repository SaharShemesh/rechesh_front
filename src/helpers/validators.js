export let isNumber = (_, value) =>
  !isNaN(value)
    ? Promise.resolve()
    : Promise.reject(new Error("Should accept agreement"));