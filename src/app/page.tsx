import AppContent from "@/components/widgets/AppContent";
import Hero from "@/components/widgets/Hero";
import NewArrivals from "@/components/widgets/NewArrivals";
import PayDay from "@/components/widgets/PayDay";
import YoungLife from "@/components/widgets/YoungLife";
export default function Home() {
  return (
    <>
      {/* Hero Page */}
      <Hero />
      {/* New ARRIVALS */}
      <NewArrivals />
      {/* PAYDAY SALE NOW */}
      <PayDay />
      {/* Young's Favorite */}
      <YoungLife />
      {/* Mobile App */}
      <AppContent />
    </>
  );
}
