import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function PayloadAdmin() {
  await getPayload({ config: configPromise })

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Payload Admin</h1>
      <p className="mt-4 text-black/75">
        Payload admin wiring is scaffolded. Add official Payload Next route handlers/components to complete integration.
      </p>
    </section>
  )
}
