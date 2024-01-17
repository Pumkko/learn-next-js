'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { incrementByQueryParams } from "../lib/searchParamNames";

export function Counter() {
    const [count, setCount] = useState(0);

    const searchParams = useSearchParams();

    const incrementBy = useMemo(() => {
        const incrementByParams = searchParams.get(incrementByQueryParams);
        return incrementByParams ? Number.parseInt(incrementByParams) : 1;
    }, [searchParams])

    return <div>
        <button onClick={() => setCount(c => c + incrementBy)}>Count {count}</button>
        <Link href={"/Counter/Settings"}>Settings</Link>
    </div>
}