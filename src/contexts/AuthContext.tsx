'use client'

import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from '../services/firebase'

type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  type AuthContextType = {
    user: User | null;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
  }
  
  type AuthContextProviderProps = {
    children: ReactNode
  }

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps ) {
  const [user, setUser] = useState<User | null>(null);

    useEffect( () => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          const { displayName, photoURL, uid } = user
         
          
          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account')
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
          })
        }
      })

      return () => {
        unsubscribe()
      }
    }, [])

    async function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()

      const result = await auth.signInWithPopup(provider)

          if (result.user) {
            const { displayName, photoURL, uid } = result.user
         
          
          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account')
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
          })
        }
    }

    async function signOut() {
      await auth.signOut(); // Logout usando Firebase Authentication
      setUser(null); // Atualiza o estado do usuário para null após o logout
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
            {props.children}
        </AuthContext.Provider>
    ) 
}