// script.js

async function fetchData(path) {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/FinnyJakey/weblog/main${path}`,
    );

    if (!response.ok) {
      return {
        status: false,
        message: "Network Response Error",
      };
    }

    return {
      status: true,
      result: await response.json(),
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
    };
  }
}
