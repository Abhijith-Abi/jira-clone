import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Button variant="secondary">Click Me</Button>
            <Textarea placeholder="Type your message here." />
        </div>
    );
}
