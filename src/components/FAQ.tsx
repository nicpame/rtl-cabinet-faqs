import { useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const faqData = [
  {
    id: "1",
    question: "زمان ساخت و دکوراسیون کابینت آشپزخانه چقدر است؟",
    answer: "زمان ساخت و نصب کابینت آشپزخانه معمولاً بین ۲ تا ۴ هفته طول می‌کشد، بسته به پیچیدگی طرح و اندازه آشپزخانه."
  },
  {
    id: "2",
    question: "کابینت MDF چیست و چه مزایایی دارد؟",
    answer: "کابینت MDF از فیبرهای فشرده چوب ساخته شده است. مزایای آن شامل مقاومت در برابر رطوبت، دوام بالا و قیمت مناسب است."
  },
  {
    id: "3",
    question: "روند طراحی کابینت آشپزخانه چگونه است؟",
    answer: "روند طراحی شامل بازدید از محل، مشاوره با مشتری، ارائه طرح اولیه، اصلاحات و تایید نهایی است."
  },
  {
    id: "4",
    question: "نصب کابینت چقدر طول می‌کشد؟",
    answer: "نصب کابینت معمولاً ۲ تا ۳ روز طول می‌کشد، اما این زمان بسته به حجم کار متغیر است."
  },
  {
    id: "5",
    question: "هزینه هر متر کابینت چقدر است؟",
    answer: "هزینه هر متر کابینت بسته به جنس، طرح و تجهیزات انتخابی متفاوت است. برای دریافت قیمت دقیق با ما تماس بگیرید."
  }
];

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div dir="rtl" className="w-full max-w-3xl mx-auto p-6 bg-faq-bg rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold mb-8 text-faq-text text-center">
        سوالات متداول
      </h2>
      
      <div className="relative mb-8">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="جستجو در سوالات..."
          className="w-full pl-4 pr-12 py-3 border border-faq-border rounded-lg focus:ring-2 focus:ring-faq-accent focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {filteredFAQs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border border-faq-border rounded-lg overflow-hidden bg-white"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-faq-bg transition-colors">
              <span className="text-lg font-medium text-faq-text">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filteredFAQs.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          نتیجه‌ای یافت نشد
        </p>
      )}
    </div>
  );
}