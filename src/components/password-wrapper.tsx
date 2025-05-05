"use client"

import { useState } from "react"
import { PasswordGenerator } from "@/components/password-generator"
import { QRCodeGenerator } from "@/components/qr-code-generator"

export function PasswordWrapper() {
  const [generatedPassword, setGeneratedPassword] = useState("")

  return (
    <>
      {/* Password Generator Component */}
      <PasswordGenerator onPasswordChange={setGeneratedPassword} />
      
      {/* QR Code Generator */}
      <div className="mt-8">
        <QRCodeGenerator text={generatedPassword} />
      </div>
    </>
  )
}
