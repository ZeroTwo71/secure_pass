"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How secure are the generated passwords?</AccordionTrigger>
          <AccordionContent>
            Our password generator creates highly secure passwords using client-side JavaScript random values. 
            The entropy increases with password length and complexity. For maximum security, we recommend using 
            passwords that are at least 12 characters long with a mix of uppercase, lowercase, numbers, and symbols.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are the generated passwords saved anywhere?</AccordionTrigger>
          <AccordionContent>
            No, all password generation happens directly in your browser. We don't store, transmit, 
            or save your generated passwords on any server. The passwords are never sent across the internet, 
            ensuring your security and privacy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What makes a password strong?</AccordionTrigger>
          <AccordionContent>
            A strong password has sufficient length (12+ characters), uses a mix of character types 
            (uppercase, lowercase, numbers, symbols), avoids common patterns or dictionary words, 
            and is unique for each service. Our password strength indicator helps you assess how 
            secure your generated password is.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How often should I change my passwords?</AccordionTrigger>
          <AccordionContent>
            Current security best practices recommend changing passwords only when there's a reason to 
            believe they've been compromised. Using unique, strong passwords for each account and a 
            password manager is more effective than regular password changes. However, for critical 
            accounts, periodic changes can add an extra layer of security.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Can I use this generator on my mobile device?</AccordionTrigger>
          <AccordionContent>
            Yes! Our password generator is built with responsive design principles and works well 
            on mobile devices, tablets, and desktop computers. The interface automatically adjusts 
            to fit your screen size for the best user experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
