import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Note: a.model( {
    title : a.string(),
    content: a.string(),
    initials: a.string(),
  })
  .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

export type NoteFields = Schema["Note"]["type"]

// const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);


// useEffect(() => {
//   client.models.Todo.observeQuery().subscribe({
//     next: (data) => setTodos([...data.items]),
//   });
// }, []);