// lib/user.ts
export type User = {
  id: string;
  name: string;
};

const user: User = { id: '1', name: 'John Doe' };

export async function getUser(): Promise<User> {
  // Simulate a server delay
  await new Promise(res => setTimeout(res, 300));
  return user;
}

export async function updateUserName(newName: string): Promise<User> {
  // Simulate server update delay
  await new Promise(res => setTimeout(res, 300));
  user.name = newName;
  return user;
}
