import { AuthProvider } from "@/auth/context";
import { HomePage } from "@/containers/home-page/HomePage";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <HomePage/>
      </AuthProvider>
    </>
  );
}
