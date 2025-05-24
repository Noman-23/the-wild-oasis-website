'use client';
import { useReservationCtx } from '@/app/_components/ReservationContext';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservationCtx();

  if (!range.from || !range.to) return null;

  return (
    <div className=' py-3 px-8 rounded-full bg-accent-500 text-primary-800 text  font-semibold shadow-xl shadow-slate-900 flex gap-8 items-center'>
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates from{' '}
        {format(new Date(range.from), 'MMM dd yyyy')} to {format(new Date(range.to), 'MMM dd yyyy')}
      </p>
      <button className='rounded-full p-1 hover:bg-accent-600 transition-all' onClick={resetRange}>
        <XMarkIcon className='h-5 w-5' />
      </button>
    </div>
  );
}

export default ReservationReminder;
