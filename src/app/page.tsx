import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <div className="gap-4 flex p-4 h-dvh">
            <Input />
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="muted">Link</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="teritary">Teritary</Button>
        </div>
    );
}
