"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import QRCode from "qrcode"

export function QRCodeGenerator({ text }: { text: string }) {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("")

  useEffect(() => {
    if (text) {
      generateQRCode(text)
    }
  }, [text])

  const generateQRCode = async (text: string) => {
    try {
      const dataUrl = await QRCode.toDataURL(text, {
        width: 200,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      })
      setQrCodeDataUrl(dataUrl)
    } catch (err) {
      console.error("Failed to generate QR code", err)
    }
  }

  const downloadQRCode = () => {
    if (!qrCodeDataUrl) return
    
    const link = document.createElement("a")
    link.href = qrCodeDataUrl
    link.download = "password-qrcode.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full max-w-lg p-6 bg-background border rounded-lg shadow-sm space-y-4 flex flex-col items-center">
      <h3 className="text-lg font-semibold">QR Code for Your Password</h3>
      
      {qrCodeDataUrl ? (
        <div className="my-4 bg-white p-4 rounded-lg">
          <img src={qrCodeDataUrl} alt="QR Code" className="w-40 h-40 mx-auto" />
        </div>
      ) : (
        <div className="w-40 h-40 mx-auto bg-muted/50 rounded-lg flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Generate a password</p>
        </div>
      )}
      
      <Button 
        onClick={downloadQRCode} 
        disabled={!qrCodeDataUrl}
        className="mt-2"
      >
        <Download className="mr-2 h-4 w-4" />
        Download QR Code
      </Button>
    </div>
  )
}
