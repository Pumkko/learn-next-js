'use client'
import { useState } from "react";
import Link from "next/link";
import { incrementByQueryParams } from "../lib/searchParamNames";

export default function Page() {
    const [incrementBy, setIncrementBy] = useState(1);
    return <div>
        <label>Increment By</label>
        <input type="number" onChange={(e) => setIncrementBy(e.currentTarget.valueAsNumber)} value={incrementBy}></input>
        <Link href={`/Counter?${incrementByQueryParams}=${incrementBy}`}>Counter</Link>
    </div>
}