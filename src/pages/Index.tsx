import { FAQ } from "@/components/FAQ";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { StepsSection } from "@/components/StepsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <StepsSection />
      <PortfolioGrid />
      <FAQ />
    </div>
  );
};

export default Index;