import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Fivester",
  description: "Terms & Conditions for Fivester",
}

export default function TermsAndConditions() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            <strong>Last Updated: November 27, 2025</strong>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Use License</h2>
          <p className="mb-6">
            Permission is granted to temporarily download one copy of the materials (information or software) on Fivester's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on Fivester's website</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Disclaimer</h2>
          <p className="mb-6">
            The materials on Fivester's website are provided on an 'as is' basis. Fivester makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Limitations</h2>
          <p className="mb-6">
            In no event shall Fivester or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fivester's website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Accuracy of Materials</h2>
          <p className="mb-6">
            The materials appearing on Fivester's website could include technical, typographical, or photographic errors. Fivester does not warrant that any of the materials on its website are accurate, complete, or current. Fivester may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Links</h2>
          <p className="mb-6">
            Fivester has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Fivester of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Modifications</h2>
          <p className="mb-6">
            Fivester may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Governing Law</h2>
          <p className="mb-6">
            These terms and conditions are governed by and construed in accordance with the laws of Saudi Arabia, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p className="mb-6">
            <strong>Email:</strong> support@fivestarsa.com<br />
            <strong>Phone:</strong> +966 XX XXXX XXXX<br />
            <strong>WhatsApp:</strong> +966 XX XXXX XXXX
          </p>
        </div>
      </div>
    </div>
  )
}
