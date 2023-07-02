import { TrashIcon } from '@/components/icons';
import Button from '@/components/ui/button';
import EditStudentDialog from './edit-student-dialog';

export default function StudentsTable({ users, onUserUpdated, onUserDeleted }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-full max-w-full text-left lg:table-fixed">
        <thead className="text-sm text-neutral-500 [&_th]:font-medium">
          <tr className="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
            <th scope="col" className="w-[72px]">
              Avatar
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Company Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="relative">
          {users.length === 0 && (
            <tr className="my-8">
              <td colSpan={7} className="py-8 text-center text-neutral-500">
                No students found.
              </td>
            </tr>
          )}
          {users.map((user) => {
            const fullName = `${user.firstName} ${user.lastName}`;
            const phoneNumber = user.phone.replace(' ', '');

            return (
              <tr
                key={user.id}
                className="rounded-lg border border-neutral-100 bg-white [&>*]:truncate [&>*]:px-4 [&>*]:py-2"
              >
                <td className="w-[72px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user.image}
                    alt={`Profile photo of ${fullName}`}
                    className="aspect-square w-full rounded-xl"
                  />
                </td>
                <td>{fullName}</td>
                <td>
                  <a href={`mailto:${user.email}`}>
                    <span>{user.email}</span>
                  </a>
                </td>
                <td>
                  <a href={`tel:${phoneNumber}`}>
                    <span>{phoneNumber}</span>
                  </a>
                </td>
                <td>
                  <a href={`https://${user.domain}`} target="_blank" rel="noreferrer">
                    <span>{user.domain}</span>
                  </a>
                </td>
                <td>{user.company.name}</td>
                <td className="flex gap-1">
                  <EditStudentDialog
                    user={user}
                    onUserUpdated={(data) => {
                      onUserUpdated({
                        ...data,
                        id: user.id,
                      });
                    }}
                  />
                  <Button variant="anchor">
                    <TrashIcon />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
