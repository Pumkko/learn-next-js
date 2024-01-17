'use client'

import { useFormState } from "react-dom";
import { createCharacter } from "../actions/createCharacter";

export function CreateCharacterForm() {

    const [state, formAction] = useFormState(createCharacter, {
        errors: '',
    })

    return <div>
        <form action={formAction}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="origin">Origin</label>
            <input type="text" id="origin" name="origin" required />
            <p>
                {state?.errors}
            </p>
            <button type="submit">Create</button>
        </form>
    </div>

}