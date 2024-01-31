export default function MyAccountLayout({
  children,
  ordersInfo,
  userInfo,
}: {
  children: React.ReactNode;
  userInfo: React.ReactNode;
  ordersInfo: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      {children}
      <main className="flex rounded-lg border p-8 gap-8">
        {userInfo}
        {ordersInfo}
      </main>
    </div>
  );
}
