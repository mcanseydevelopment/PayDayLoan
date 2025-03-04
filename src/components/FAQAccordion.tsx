import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'How Much Can I Borrow?',
    answer: 'The amount a lender or lending partner is willing to give you depends on how the lender or lending partner evaluates a number of factors, including your creditworthiness. Also, please be aware of applicable legal restrictions (loans are not available in all states). Many lenders or lending partners in our network will loan between $100 and $5,000.',
  },
  {
    question: 'How Is My Private Information Protected?',
    answer: 'We use industry-recognized security and advanced encryption technology to protect your personal information. Your information is transmitted and stored securely in an encrypted format. Please review our privacy policy for additional details.',
  },
  {
    question: 'How Long Does the Process Take?',
    answer: 'It should only take a few minutes to complete our secure online form. After we receive your information, we immediately start looking for a lender or lending partner that is willing to work with you. You should have a response from one of our lenders or lending partners within minutes. Final approval and funding is often done in as little as 24 to 48 hours.',
  },
  {
    question: 'What Are the Requirements to Apply?',
    answer: 'To apply for a loan, you typically need to: be at least 18 years old, have a valid government-issued ID, provide proof of regular income, have an active checking account, and be a permanent US resident. No minimum credit score is required, as we work with lenders who consider factors beyond just credit history.',
  },
  {
    question: 'When Do I Need to Repay the Loan?',
    answer: 'Repayment terms vary by lender and loan type, but typically payday loans are due on your next pay date, usually within 14-30 days. The exact repayment date and terms will be clearly disclosed in your loan agreement before you accept the offer. Some lenders may also offer extended payment plans if needed.',
  },
]

export default function FAQSection() {
  return (
    <section className="md:pt-4 pt-3" id="faqshopify">
      <div className="max-w-7xl xl:mx-auto lg:mx-10 sm:mx-3 px-4">
        <div className="flex flex-col items-center">
          <Button 
            variant="outline" 
            className="rounded-full"
          >
            FAQ&apos;s
          </Button>

          <h2 className="text-center text-2xl font-bold md:text-4xl lg:text-5xl md:mb-12 mb-6 md:mt-6 mt-3">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="mb-4 overflow-hidden rounded-lg border bg-[#F1F5FF] transition-all hover:bg-[#F1F5FF]"
              >
                <AccordionTrigger className="px-6 text-left text-[18px] md:text-[22px] font-medium no-underline hover:no-underline data-[state=open]:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600 text-[16px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

