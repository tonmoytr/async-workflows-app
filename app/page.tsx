// app/page.tsx
import { getUser } from '@/lib/user';
import UserForm from './(components)/forms/UserForm';

export default async function Page() {
  const user = await getUser();

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <UserForm initialName={user.name} />
    </main>
  );
}
