import { Card, CardContent } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { JSX, SVGProps } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Second from "./Second"

const First = () => {
    return (
        <Card className="w-full max-w-sm overflow-hidden">
            <CardContent className="p-0">
                <div className="flex items-center gap-3 p-4 border-b">
                    <Avatar className="w-8 h-8 border">
                        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <Link className="text-sm font-semibold" href="#">
                        Acme Inc
                    </Link>
                </div>
                <Carousel className="w-full max-w-md">
                    <CarouselContent>
                        <CarouselItem>
                            <img alt="Image" className="aspect-video object-cover" height={252} src="/view.jpg" width={448} />
                        </CarouselItem>
                        <CarouselItem>
                            <img alt="Image" className="aspect-video object-cover" height={252} src="/view.jpg" width={448} />
                        </CarouselItem>
                        <CarouselItem>
                            <img alt="Image" className="aspect-video object-cover" height={252} src="/view.jpg" width={448} />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className="p-2 pb-4 grid gap-2">
                    <div className="flex items-center w-full">
                        <Second />
                        <Button className="ml-auto" size="icon" variant="ghost">
                            <BookmarkIcon className="w-4 h-4" />
                            <span className="sr-only">Comment</span>
                        </Button>
                    </div>
                    <div className="px-2 text-sm w-full grid gap-1.5">
                        <div>
                            <Link className="font-medium" href="#">
                                john
                            </Link>
                            Wow, this photo is absolutely stunning! 😍✨
                        </div>
                        <div>
                            <Link className="font-medium" href="#">
                                amelia
                            </Link>
                            This post just made my day! 😃👍
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default First

function BookmarkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        </svg>
    )
}


function FileWarningIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    )
}




function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
    )
}


function MoreHorizontalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    )
}


function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}


function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}