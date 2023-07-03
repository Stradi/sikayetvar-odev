import Button from '@/components/ui/button';
import Dialog from '@/components/ui/dialog';
import Input from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import Label from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import z from 'zod';

const AddStudentSchema = z.object({
  name: z
    .string()
    .nonempty()
    .refine((value) => value.split(' ').length > 1 && value.split(' ')[1] !== '', {
      message: `Looks like you're missing the last name`,
    }),
  email: z.string().nonempty().email({
    message: 'Please enter a valid email address',
  }),
  phone: z
    .string()
    .nonempty()
    .min(10, 'Phone number must be at least 10 characters long')
    .startsWith('+', 'Please enter the country code'),
  domain: z.string().nonempty().url({
    message: 'Please enter a valid URL',
  }),
  company: z.object({
    name: z.string().nonempty(),
  }),
});

export default function AddStudentDialog({ onUserAdded }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(AddStudentSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  function onSubmit(data) {
    // Handle add new student logic here.
    // e.g. send a POST request to the API
    const splitName = data.name.split(' ');
    onUserAdded?.({
      firstName: splitName[0],
      lastName: splitName[1],
      image: `https://robohash.org/${data.name}`,
      ...data,
    });

    // Resetting all the form fields. If not, the form will have the previous values
    // when the dialog is opened again.
    reset();
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add New Student</Button>
      <Dialog
        title="Add New Student"
        description="Create a new student"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 [&>*]:flex [&>*]:flex-col [&>*]:gap-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" placeholder="Jon Snow" autoComplete="name" {...register('name')} />
            {errors.name && <InputError>{errors.name.message}</InputError>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jon@snow.com"
              autoComplete="email"
              {...register('email')}
            />
            {errors.email && <InputError>{errors.email.message}</InputError>}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+90 555 555 55 55"
              autoComplete="tel"
              {...register('phone')}
            />
            {errors.phone && <InputError>{errors.phone.message}</InputError>}
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="www.jonsnow.com"
              autoComplete="url"
              {...register('domain')}
              onBlur={(e) => {
                try {
                  const currentURL = new URL(e.target.value);
                  const { protocol } = currentURL;

                  if (protocol !== 'http:' && protocol !== 'https:') {
                    currentURL.protocol = 'https://';
                    setValue('domain', currentURL.href);
                  }
                } catch (_) {
                  setValue('domain', `https://${e.target.value}`);
                }

                register('domain').onBlur(e);
              }}
            />
            {errors.domain && <InputError>{errors.domain.message}</InputError>}
          </div>
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Night's Watch"
              autoComplete="organization"
              {...register('company.name')}
            />
            {errors.company && errors.company.name && <InputError>{errors.company.name.message}</InputError>}
          </div>
          <Button type="submit" disabled={Object.keys(errors).length > 0}>
            Create
          </Button>
        </form>
      </Dialog>
    </>
  );
}
