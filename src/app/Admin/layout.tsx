import AdminHeader from "@/components/HeaderAdmin";
import { AuthProvider } from "@/contexts/AuthContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        <AdminHeader />
        {children}
      </AuthProvider>
    </>
  )
}