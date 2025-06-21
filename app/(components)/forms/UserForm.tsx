"use client";

import { useActionState, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { updateNameInDb } from "@/actions/userActions.server";

type State = {
  success: boolean;
  updatedName?: string;
};

type Props = {
  initialName: string;
};

export default function UserForm({ initialName }: Props) {
  const [name, setName] = useState(initialName);

  const [, formAction, isPending] = useActionState<State, FormData>(
    async (_prevState, formData) => {
      const name = formData.get("name") as string;
      const success = await updateNameInDb(name);
      if (success) {
        toast.success("Name updated!");
        setName(name);
      }
      return { success };
    },
    { success: false }
  );

  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Update Your Name</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Updating..." : "Update Name"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
