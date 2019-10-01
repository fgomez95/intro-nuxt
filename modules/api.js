export const getUsersApi = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    const users = json.map(user => ({
      ...user,
      active: Math.random() >= 0.5
    }));
    return {
      users,
      success: true
    };
  } catch (err) {
    return {
      message: err.message,
      success: false
    };
  }
};
