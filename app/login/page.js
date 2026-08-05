import LoginForm from "@/components/LoginForm"

export const metadata = {
    title: "Login",
    description: "Login to your   MediBook account",
};

export default function LoginPage() {
  return (
    <main className="auth-page">
      <LoginForm />
    </main>
  );
}