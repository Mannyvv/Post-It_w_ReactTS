import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Note: a.model( {
    title : a.string().required(),
    content: a.string().required(),
    initials: a.string().required(),
  })
  .authorization((allow) => [allow.publicApiKey()]),
});


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

export type Schema = ClientSchema<typeof schema>;
export type NoteFields = Schema["Note"]["type"]

// const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);


// useEffect(() => {
//   client.models.Todo.observeQuery().subscribe({
//     next: (data) => setTodos([...data.items]),
//   });
// }, []);