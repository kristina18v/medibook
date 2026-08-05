import RegisterForm from '@/components/RegisterForm';

export const metadata = {
    title: "Register",
    description: "Register for a new MediBook account",
}

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <RegisterForm />
    </main>
  );
}