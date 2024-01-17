'use client'

import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string; };
    reset: () => void;

}

export default function Error(props: ErrorProps) {
    useEffect(() => {
        console.error(props.error)
    }, [props.error])

    return <div>
        <h1>Unexpected error</h1>
        <p>You might want to try again</p>
        <button onClick={props.reset}>Try Again ?</button>
    </div>
}