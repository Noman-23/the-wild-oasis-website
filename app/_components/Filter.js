'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='border border-primary-800 flex'>
      <Button filter='all' activeFilter={activeFilter} onClick={handleFilter}>
        All Cabins
      </Button>
      <Button filter='small' activeFilter={activeFilter} onClick={handleFilter}>
        1 &mdash; 3 Guests
      </Button>
      <Button filter='medium' activeFilter={activeFilter} onClick={handleFilter}>
        4 &mdash; 7 Guests
      </Button>
      <Button filter='large' activeFilter={activeFilter} onClick={handleFilter}>
        8 &mdash; 12 Guests
      </Button>
    </div>
  );
}

function Button({ children, filter, activeFilter, onClick }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      }`}
      onClick={() => onClick(filter)}>
      {children}
    </button>
  );
}
