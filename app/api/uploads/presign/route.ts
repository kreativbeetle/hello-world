import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    {
      message: 'Presign endpoint scaffolded. Implement AWS SDK v3 S3 pre-signed URLs with auth, mime checks, and size caps.',
    },
    { status: 501 },
  )
}
