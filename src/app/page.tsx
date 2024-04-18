import { headers } from 'next/headers';
import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-zinc-400">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
    </main>
  );
}
