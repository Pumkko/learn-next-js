import { Suspense } from "react"
import { Counter } from "./components/counter";

export default function Page() {
    return <div>
        <Suspense fallback={<>Loading Counter</>}>
            <Counter></Counter>
        </Suspense>
    </div>

}