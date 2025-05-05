"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Copy, RefreshCw } from "lucide-react"

// Password strength labels
const strengthLabels = ["Very Weak", "Weak", "Good", "Strong", "Very Strong"]

interface PasswordGeneratorProps {
  onPasswordChange?: (password: string) => void;
}

export function PasswordGenerator({ onPasswordChange }: PasswordGeneratorProps = {}) {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [strengthIndex, setStrengthIndex] = useState(2)
  const [copied, setCopied] = useState(false)
  const [showCopyNotification, setShowCopyNotification] = useState(false)

  // Generate password when settings change
  useEffect(() => {
    generatePassword()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])
  
  // Send password to parent component when it changes
  useEffect(() => {
    if (onPasswordChange) {
      onPasswordChange(password)
    }
  }, [password, onPasswordChange])

  // Calculate password strength
  useEffect(() => {
    calculateStrength()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password])

  const generatePassword = () => {
    let charset = ""
    let newPassword = ""

    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeNumbers) charset += "0123456789"
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    // Ensure at least one type is selected
    if (charset === "") {
      setIncludeLowercase(true)
      charset = "abcdefghijklmnopqrstuvwxyz"
    }

    // Generate random password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      newPassword += charset[randomIndex]
    }

    setPassword(newPassword)
  }

  const calculateStrength = () => {
    let strength = 0

    // Add points for length
    if (length >= 6) strength += 1
    if (length >= 10) strength += 1
    if (length >= 14) strength += 1

    // Add points for character types
    let charTypesCount = 0
    if (includeUppercase) charTypesCount += 1
    if (includeLowercase) charTypesCount += 1
    if (includeNumbers) charTypesCount += 1
    if (includeSymbols) charTypesCount += 1
    
    strength += charTypesCount

    // Calculate final strength index
    let strengthIndex = Math.floor(strength / 2)
    
    // Special case for Very Strong: all character types AND length >= 16
    if (charTypesCount === 4 && length >= 16) {
      strengthIndex = 4 // Very Strong
    } else {
      strengthIndex = Math.min(3, strengthIndex) // Cap at Strong (3) otherwise
    }
    
    setStrengthIndex(strengthIndex)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setShowCopyNotification(true)
    setTimeout(() => {
      setCopied(false)
      setShowCopyNotification(false)
    }, 2000)
  }

  // Get the appropriate class for the strength meter
  const getStrengthClass = () => {
    const classes = [
      "bg-red-500", // Very Weak
      "bg-orange-500", // Weak
      "bg-yellow-500", // Good
      "bg-green-500", // Strong
      "bg-emerald-500", // Very Strong
    ]
    return classes[strengthIndex]
  }

  return (
    <div className="w-full max-w-lg p-6 bg-background border rounded-lg shadow-sm space-y-6">
      <div className="flex items-center justify-between bg-muted/50 p-3 rounded-md mb-4 relative">
        <div className="font-mono text-lg">{password}</div>
        <div className="flex gap-2">
          <Button 
            onClick={generatePassword} 
            size="icon" 
            variant="ghost"
            aria-label="Generate new password"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button 
            onClick={copyToClipboard} 
            size="icon" 
            variant={copied ? "default" : "outline"}
            aria-label="Copy password"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        {showCopyNotification && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-sm py-1 px-3 rounded-md shadow-sm transition-opacity">
            Copied!
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">Password Length: {length}</label>
            <span className="text-sm font-medium text-foreground/70">
              {strengthLabels[strengthIndex]}
            </span>
          </div>
          <Slider
            value={[length]}
            min={1}
            max={30}
            step={1}
            onValueChange={(value) => setLength(value[0])}
            className="my-4"
          />
          <div className="h-2 rounded-full bg-muted overflow-hidden mt-2">
            <div 
              className={`h-full ${getStrengthClass()} transition-all duration-300 ease-in-out`}
              style={{ width: `${(strengthIndex + 1) * 20}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="uppercase" 
              checked={includeUppercase}
              onCheckedChange={(checked) => setIncludeUppercase(checked === true)}
            />
            <label
              htmlFor="uppercase"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Uppercase (A-Z)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="lowercase" 
              checked={includeLowercase}
              onCheckedChange={(checked) => setIncludeLowercase(checked === true)}
            />
            <label
              htmlFor="lowercase"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Lowercase (a-z)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="numbers" 
              checked={includeNumbers}
              onCheckedChange={(checked) => setIncludeNumbers(checked === true)}
            />
            <label
              htmlFor="numbers"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Numbers (0-9)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="symbols" 
              checked={includeSymbols}
              onCheckedChange={(checked) => setIncludeSymbols(checked === true)}
            />
            <label
              htmlFor="symbols"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Symbols (!@#$%)
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
