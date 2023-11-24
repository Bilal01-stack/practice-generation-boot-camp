import { createContext } from "react";

const userContext = createContext({
    user:{
    name: "dummy name",
    email: "dumy email",
},
})

export default userContext;