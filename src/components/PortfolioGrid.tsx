import { useState } from "react";
import { Card } from "@/components/ui/card";

type Project = {
  id: number;
  image: string;
  category: "کلاسیک" | "مدرن" | "نئوکلاسیک";
};

const projects: Project[] = [
  { id: 1, image: "/lovable-uploads/5bc522df-ffc4-4315-8331-f93e39503cdc.png", category: "مدرن" },
  { id: 2, image: "/lovable-uploads/5bc522df-ffc4-4315-8331-f93e39503cdc.png", category: "کلاسیک" },
  { id: 3, image: "/lovable-uploads/5bc522df-ffc4-4315-8331-f93e39503cdc.png", category: "نئوکلاسیک" },
  { id: 4, image: "/lovable-uploads/5bc522df-ffc4-4315-8331-f93e39503cdc.png", category: "مدرن" },
  { id: 5, image: "/lovable-uploads/5bc522df-ffc4-4315-8331-f93e39503cdc.png", category: "کلاسیک" },
  { id: 6, image: "/lovable-uploads/5bc522df-ffc4-4315-8331-f93e39503cdc.png", category: "نئوکلاسیک" },
];

const categories = ["همه", "کلاسیک", "مدرن", "نئوکلاسیک"] as const;

export const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("همه");

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "همه" ? true : project.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-12" dir="rtl">
      <h2 className="text-3xl font-bold text-center mb-8">نمونه کارهای جدید کابینت آشپزخانه</h2>
      
      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-faq-accent text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="group relative overflow-hidden">
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                برای تصاویر بیشتر پروژه کلیک کنید
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};