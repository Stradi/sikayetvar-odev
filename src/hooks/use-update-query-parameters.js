import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useUpdateQueryParameters() {
  // Required for query param handling
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();

  function updateQueryParameters(data) {
    const current = new URLSearchParams(Array.from(queryParams.entries()));

    if (Array.isArray(data)) {
      data.forEach((entry) => {
        const { key, value } = entry;

        // Normally we should have more robust validation here, e.g. check if not undefined, etc.
        // But for the sake of simplicity, we'll just check if the value is 0.
        if (value === 0 || value === '') {
          current.delete(key);
        } else {
          current.set(key, value);
        }
      });
    } else {
      const { key, value } = data;

      if (value === 0) {
        current.delete(key);
      } else {
        current.set(key, value);
      }
    }

    const newQueryParams = new URLSearchParams(current.toString());
    router.push(`${pathname}?${newQueryParams.toString()}`);
  }

  return {
    queryParams,
    updateQueryParameters,
  };
}
