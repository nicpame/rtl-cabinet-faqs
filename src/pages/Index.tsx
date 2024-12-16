import { FAQ } from "@/components/FAQ";
import { PortfolioGrid } from "@/components/PortfolioGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PortfolioGrid />
      <FAQ />
    </div>
  );
};

export default Index;