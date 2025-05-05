"use client"

import { Key, ShieldCheck, KeySquare } from "lucide-react"

export function PasswordInfoCards() {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-center mb-10">What makes a password strong?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-background border rounded-lg p-6 flex flex-col items-center text-center">
          <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20">
            <Key className="h-8 w-8 text-orange-500" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Long</h3>
          <p className="text-muted-foreground">
            The longer a password, the more secure it is. A strong password should be at least 10 characters long.
          </p>
        </div>
        
        <div className="bg-background border rounded-lg p-6 flex flex-col items-center text-center">
          <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
            <ShieldCheck className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Complex</h3>
          <p className="text-muted-foreground">
            Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.
          </p>
        </div>
        
        <div className="bg-background border rounded-lg p-6 flex flex-col items-center text-center">
          <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
            <KeySquare className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Unique</h3>
          <p className="text-muted-foreground">
            A strong password should be unique to each account to reduce vulnerability in the event of a hack.
          </p>
        </div>
      </div>
    </div>
  )
}
