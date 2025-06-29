import DigitalClock from "~/widgets/DigitalClock";
import type { Route } from "../../../.github/workflows/.react-router/types/app/pages/+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Clock() {
    return (
        <main className="w-full h-dvh flex items-center justify-center bg-radial from-stone-900 from-30% to-stone-950">
            <DigitalClock />
        </main>
    )
}
