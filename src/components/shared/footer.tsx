import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="text-center py-12 px-8 mt-4 bottom-0 w-full">
    <Separator />
    <p className="mt-4">Future World © SM {new Date().getFullYear()}</p>
  </footer>
  );
};
