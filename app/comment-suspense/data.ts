// app/comments-suspense/data.ts

type Comment = { id: number; message: string }

const fakeComments: Comment[] = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  message: `Comment ${i + 1}`
}))

export async function fetchComments(page = 1, sort = 'desc', limit = 5): Promise<Comment[]> {
  await new Promise((r) => setTimeout(r, 1000)) // Simulate latency

  const sorted = [...fakeComments].sort((a, b) => {
    return sort === 'desc' ? b.id - a.id : a.id - b.id
  })

  const start = (page - 1) * limit
  const end = start + limit

  return sorted.slice(start, end)
}
