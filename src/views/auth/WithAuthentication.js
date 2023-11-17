"use client";
import { AuthProvider, RequireAuth } from "./index";
import { useRouter } from "next/navigation";
const WithAuthentication = (props) => {
  const router = useRouter();

  const { component: Component } = props;
  return (
    <AuthProvider>
      <RequireAuth>
        <Component {...props} />
      </RequireAuth>
    </AuthProvider>
  );
};

export default WithAuthentication;
