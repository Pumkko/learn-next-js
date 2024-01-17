'use server'

import { db } from "@/app/lib/db"
import { characters } from "../../../../db-schema/schema"
import { v4 } from 'uuid'
import * as v from 'valibot'

const createCharacterSchema = v.object({
    name: v.nonNullish(v.string('name is not a string', [v.minLength(1, 'name is too short')]), 'name is nullish'),
    origin: v.nonNullish(v.string('origin is not a string', [v.minLength(1, 'origin is too short')]), 'origin is nullish'),
})

export async function createCharacter(prevState: any, formData: FormData) {

    const parsedFormData = await v.safeParseAsync(createCharacterSchema, {
        name: formData.get('name'),
        origin: formData.get('origin')
    });

    // Return early if the form data is invalid
    if (!parsedFormData.success) {
        return {
            errors: parsedFormData.issues.map(i => i.message).join(',')
        }
    }

    const ids = await db.insert(characters).values({
        name: parsedFormData.output.name,
        origin: parsedFormData.output.origin,
        id: v4()
    }).returning({ insertedId: characters.id });
    return {
        createdIds: ids
    };
}