'use client';

import { ChevronIcon } from '@/components/icons';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import useUpdateQueryParameters from '@/hooks/use-update-query-parameters';
import debounce from 'lodash.debounce';
import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../components/section-header';
import StudentsTable from './students-table';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const { queryParams, updateQueryParameters } = useUpdateQueryParameters();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  const [users, setUsers] = useState([]);
  const [totalUserCount, setTotalUserCount] = useState(0);

  useEffect(() => {
    const queryPage = queryParams.get('page');
    const queryLimit = queryParams.get('limit');
    const querySearchTerm = queryParams.get('search');

    if (queryPage && !isNaN(Number(queryPage))) {
      setPage(Number(queryPage));
    }

    if (queryLimit && !isNaN(Number(queryLimit))) {
      setRowsPerPage(Number(queryLimit));
    }

    if (querySearchTerm && typeof querySearchTerm === 'string' && querySearchTerm !== '') {
      setSearchTerm(querySearchTerm);
    }
  }, [queryParams]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}&limit=${rowsPerPage}&skip=${page * rowsPerPage}`
      );
      const data = await response.json();
      setUsers(data.users);
      setTotalUserCount(data.total);

      setIsLoading(false);
    }

    setIsLoading(true);
    fetchUsers();
  }, [rowsPerPage, page, searchTerm]);

  const onSearchTermChange = useMemo(
    () =>
      debounce((event) => {
        setSearchTerm(event.target.value);
        setPage(0);
        updateQueryParameters([
          {
            key: 'search',
            value: event.target.value,
          },
          {
            key: 'page',
            value: 0,
          },
        ]);
      }, 500),
    [updateQueryParameters]
  );

  return (
    <section className="flex flex-col gap-8">
      <SectionHeader
        title="Students"
        subtitle="Here, you can manage your students. You can add, edit, delete and view details of your students."
        cta={
          <div className="flex gap-2">
            <Input type="search" placeholder="Search..." className="w-56" onChange={onSearchTermChange} />
            <Button>
              <span>Add New Student</span>
            </Button>
          </div>
        }
      />
      <main className="grow overflow-y-auto">
        <StudentsTable users={users} />
      </main>
      <footer className="ml-auto">
        <div className="flex items-center gap-8">
          <div>
            <span className="text-sm text-neutral-500">
              Rows per page:{' '}
              <select
                value={rowsPerPage}
                disabled={isLoading}
                onChange={(event) => {
                  setRowsPerPage(Number(event.target.value));
                  setPage(0);
                  updateQueryParameters([
                    {
                      key: 'limit',
                      value: event.target.value,
                    },
                    {
                      key: 'page',
                      value: 0,
                    },
                  ]);
                }}
                className="text-sm text-neutral-900"
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={18}>18</option>
              </select>
            </span>
          </div>
          <span className="text-sm text-neutral-500">
            {page * rowsPerPage + 1}-{page * rowsPerPage + users.length} of {totalUserCount}
          </span>
          <div>
            <Button
              variant="anchor"
              disabled={page === 0 || isLoading}
              onClick={() => {
                setPage(page - 1);
                updateQueryParameters({ key: 'page', value: page - 1 });
              }}
            >
              <ChevronIcon />
            </Button>
            <Button
              variant="anchor"
              disabled={users.length < rowsPerPage || isLoading}
              onClick={() => {
                setPage(page + 1);
                updateQueryParameters({ key: 'page', value: page + 1 });
              }}
            >
              <ChevronIcon svgClassName="rotate-180" />
            </Button>
          </div>
        </div>
      </footer>
    </section>
  );
}
