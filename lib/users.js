export async function getUserData(id) {
  const users = [
    {
      id: "user1",
      name: "John Doe",
    },
    {
      id: "user2",
      name: "Jimmy Rall",
    },
    {
      id: "user3",
      name: "Andrew Dart",
    },
  ];

  const noUser = {
    id: "noUser",
    name: "No User",
  };

  return users.filter((e) => e.id === id)[0] || noUser;
}
