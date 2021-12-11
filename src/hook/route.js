import { useRouter } from "next/router";
import React from "react";
import useAuth from "@src/hook/auth";
import Loading from "@component/loading";

export function withPublic(Component) {
  return function WithPublic(props) {
      const auth = useAuth();
      const router = useRouter();

      if (auth.user) {
          router.replace("/user/dashboard");
          return <Loading/>;
      }
      return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component) {
  return function WithProtected(props) {
      const auth = useAuth();
      const router = useRouter();

      if (!auth.user) {
          router.replace("/auth/login");
          return <Loading/>;
      }
      return <Component auth={auth} {...props} />;
  };
}