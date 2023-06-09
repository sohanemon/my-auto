'use client';

import useFilter from '@/store/filter';

export default function Pagination() {
  const [page, setPage] = useFilter((s) => [s.page, s.setPage]);
  return (
    <>
      <div className='flex items-center justify-between px-4 py-3 mx-auto border-t border-gray-200 w-max sm:px-6'>
        <div className='flex justify-between flex-1 sm:hidden'>
          <a
            href='#'
            className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
          >
            Previous
          </a>
          <a
            href='#'
            className='relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
          >
            Next
          </a>
        </div>
        <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
          <div>
            <nav
              className='inline-flex -space-x-px rounded-md shadow-sm isolate'
              aria-label='Pagination'
            >
              <a
                href='#'
                className='relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Previous</span>
                <svg
                  className='w-5 h-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              {
                <button
                  aria-current='page'
                  onClick={(e) => setPage(page - 1)}
                  className='relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-themeRed bg-themeRed'
                >
                  {page - 1}
                </button>
              }
              {Array.from(Array(5)).map((el, idx) => (
                <button
                  key={idx}
                  aria-current='page'
                  onClick={(e) => setPage(page + idx)}
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold   focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    page == idx + 1
                      ? 'focus-visible:outline-themeRed bg-themeRed text-white'
                      : ''
                  }`}
                >
                  {page + idx}
                </button>
              ))}

              <a
                href='#'
                className='relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Next</span>
                <svg
                  className='w-5 h-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
