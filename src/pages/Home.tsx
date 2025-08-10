import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function Home() {
  const { data } = useUserInfoQuery(undefined);

  return (
    <>
      {
        data?.data?.email &&
        <h1 className="text-center">Hello {data?.data?.email} Welcome </h1>
      }
    </>
  );
}
