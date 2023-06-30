'use client';

import Logo from '@/components/logo';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import Label from '@/components/ui/label';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';

const LoginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(64, 'Password must be less than 64 characters long'),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onChange',
  });

  const router = useRouter();

  function onSubmit(data) {
    // Handle authentication logic here
    // e.g. send data to the authentication server, etc...
    // for demo purposes, we'll just redirect the user to the dashboard

    router.push('/dashboard');
  }

  return (
    <section className="w-full max-w-[450px] space-y-8 rounded-2xl bg-white p-8">
      <header className="space-y-8 text-center">
        <Logo />
        <div>
          <h2 className="font-semibold uppercase">Sign In</h2>
          <p className="text-sm text-neutral-500">Enter your credentials to access your account</p>
        </div>
      </header>
      <main>
        <form className="space-y-4 [&>*]:flex [&>*]:flex-col [&>*]:gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="jon@snow.com" {...register('email')} />
            {errors.email && <InputError>{errors.email.message}</InputError>}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="*******" {...register('password')} />
            {errors.password && <InputError>{errors.password.message}</InputError>}
          </div>
          <Button type="submit" className="w-full uppercase" disabled={Object.keys(errors).length > 0}>
            Sign In
          </Button>
        </form>
      </main>
      <footer>
        <p className="text-center text-sm text-neutral-500">
          Forgot your password? <Button variant="anchor">Reset it</Button>
        </p>
      </footer>
    </section>
  );
}
