import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    {
      message: 'Estimate submission endpoint scaffolded. Persist to Payload collection and trigger SES notification.',
    },
    { status: 501 },
  )
}
