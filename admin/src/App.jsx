import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import React from "react";
import { useEffect } from "react";

const App = () => {
  const { user } = useUser(); // get the currently signed-in user

  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default App;

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
//   useUser,
// } from "@clerk/clerk-react";
// import React from "react";

// const App = () => {
//   const { user } = useUser(); // get the signed-in user
//   console.log({ user });
//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <h1>Home Page</h1>

//       <SignedOut>
//         <SignInButton />
//       </SignedOut>

//       <SignedIn>
//         <UserButton />

//         {user && (
//           <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
//             <h2>User Details:</h2>
//             <p>
//               <strong>Full Name:</strong> {user.fullName}
//             </p>
//             <p>
//               <strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}
//             </p>
//             <p>
//               <strong>Username:</strong> {user.username}
//             </p>
//             <p>
//               <strong>Profile Image:</strong>
//               <br />
//               <img
//                 src={user.imageUrl}
//                 alt="Profile"
//                 width="100"
//                 height="100"
//                 style={{ borderRadius: "50%", marginTop: "10px" }}
//               />
//             </p>
//           </div>
//         )}
//       </SignedIn>
//     </div>
//   );
// };

// export default App;
