export const dynamic = 'force-dynamic'
export const revalidate = 0

import dynamicImport from 'next/dynamic'

const NotFoundClient = dynamicImport(() => import('./not-found-client'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function NotFound() {
  return <NotFoundClient />
}
