import { z } from "zod";

export const todoSchema = z.object({
	id: z.string().describe("The unique identifier for the todo item"),
	title: z.string().describe("The title of the todo item"),
	description: z.string().optional().describe("desc of todo"),
	isCompleted: z
		.boolean()
		.describe("Whether the todo item is completed or not"),
});
export type ITodo = z.infer<typeof todoSchema>;

// export interface ITodo {
// 	id: string;
// 	title: string;
// 	description?: string;
// 	isCompleted: boolean;
// }
