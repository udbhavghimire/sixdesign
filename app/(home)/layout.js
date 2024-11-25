import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SixDesign - Real Estate Marketing & Branding",
  description:
    "Project Marketing, CRM Integration & Branding for Realtors, Brokerages & Builders",
};

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingButtons />
    </>
  );
}
