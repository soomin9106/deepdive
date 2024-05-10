'use client'
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { sanitizedOptions } from "@/lib/sanitize"
import sanitizeHtml from "sanitize-html"

const html = `<span><svg/onload=alert(origin)></span>`

const Security = () => {
    const sanitizedHtml = sanitizeHtml(html, sanitizedOptions)

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Card className="p-16">
                <CardTitle>Cross Site Scripting</CardTitle>
                <CardDescription className="mt-2">
                    XSS (Cross-Site Scripting) refers to a vulnerability where a third party can inject and execute malicious scripts on a website, without the involvement of the website developer. <br /> In React, XSS can be attempted using the dangerouslySetInnerHTML prop and useRef.
                </CardDescription>
                <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
            </Card>
        </div>
    )
}

export default Security