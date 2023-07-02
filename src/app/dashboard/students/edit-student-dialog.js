import { EditIcon } from '@/components/icons';
import Button from '@/components/ui/button';
import Dialog from '@/components/ui/dialog';
import Input from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import Label from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import z from 'zod';

const EditStudentSchema = z.object({
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

export default function EditStudentDialog({ user, onUserUpdated }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(EditStudentSchema),
    mode: 'all',
    defaultValues: {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone: user.phone,
      domain: user.domain,
      company: {
        name: user.company.name,
      },
    },
    reValidateMode: 'onChange',
  });

  function onSubmit(data) {
    // Handle edit login here
    // e.g. send a PUT/PATCH request to the API
    // for demo purposes, we'll just log the new data to the console
    // and call a callback to the parent component to update the UI.

    const splitName = data.name.split(' ');
    onUserUpdated?.({
      ...user,
      ...data,
      firstName: splitName[0],
      // User may have multiple last names
      lastName: splitName.slice(1).join(' '),
    });

    setIsOpen(false);
  }

  return (
    <>
      <Button variant="anchor" onClick={() => setIsOpen(true)}>
        <EditIcon />
      </Button>
      <Dialog
        title="Edit Student"
        description="Edit the student's information."
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 [&>*]:flex [&>*]:flex-col [&>*]:gap-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Jon Snow"
              defaultValue={`${user.firstName} ${user.lastName}`}
              {...register('name')}
            />
            {errors.name && <InputError>{errors.name.message}</InputError>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jon@snow.com"
              defaultValue={user.email}
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
              defaultValue={user.phone}
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
              defaultValue={user.domain}
              {...register('domain')}
              onBlur={(e) => {
                // Here, we can add the protocol if the user didn't added it.
                // e.g. if the user entered "jonsnow.com", we can add "https://" to the beginning
                // of the value so that it becomes "https://jonsnow.com".
                //
                // Also passing onBlur event after `{...register('domain')}` line is important to make sure
                // that our onBlur function is not overwritten by the `register` function. We are still
                // calling `react-hook-form`'s onBlur function at the end to make sure that the validation
                // is still working.
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
              defaultValue={user.company.name}
              {...register('company.name')}
            />
            {errors.company && errors.company.name && <InputError>{errors.company.name.message}</InputError>}
          </div>
          <Button type="submit" disabled={Object.keys(errors).length > 0}>
            Save
          </Button>
        </form>
      </Dialog>
    </>
  );
}
