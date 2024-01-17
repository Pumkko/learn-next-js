import { ReactNode } from "react";

export default function CounterLayout(props: { children: ReactNode }) {
    return <section>
        <h1>Counter Page</h1>
        {props.children}
    </section>

}