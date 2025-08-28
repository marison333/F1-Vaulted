export default function BaseLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='sm:w-screen md:max-w-[90rem] mx-auto'>
            {children}
        </main>
    );
}
