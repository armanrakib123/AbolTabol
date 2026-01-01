


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import dbconnect, { collectionNameObj } from "@/lib/dbconnect";
import { cookies } from "next/headers";

import { loginUser_Doctor } from "@/lib/auth/loginDoctor";
import { loginUser_Patient } from "@/lib/auth/loginPatient";
import { sendWelcomeEmail } from "@/lib/sendEmail";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/Login/patient",
  },

  providers: [
    CredentialsProvider({
      id: "doctor-login",
      name: "Doctor Login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await loginUser_Doctor(credentials);
        if (!user) return null;

        return {
          id: user._id.toString(),
          email: user.email,
          role: "doctor",
        };
      },
    }),

    CredentialsProvider({
      id: "patient-login",
      name: "Patient Login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await loginUser_Patient(credentials);
        if (!user) return null;

        return {
          id: user._id.toString(),
          email: user.email,
          role: "patient",
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.role;
      }

      if (account?.provider === "google") {
        const cookieStore = await cookies(); // ✅ FIX
        const roleCookie = cookieStore.get("vd_role")?.value;

        token.role = roleCookie === "doctor" ? "doctor" : "patient";
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },

    async signIn({ user, account }) {
      if (account?.provider !== "google") return true;

      const cookieStore = await cookies(); // ✅ FIX
      const roleCookie = cookieStore.get("vd_role")?.value;
      const role = roleCookie === "doctor" ? "doctor" : "patient";

      const col =
        role === "doctor"
          ? dbconnect(collectionNameObj.VD_Doctor_Auth)
          : dbconnect(collectionNameObj.VD_Patient_Auth);

      const exists = await col.findOne({ email: user.email });

      if (!exists) {
        await col.insertOne({
          email: user.email,
          name: user.name,
          image: user.image,
          provider: "google",
          role,
          createdAt: new Date(),
        });

        await sendWelcomeEmail(user.email, user.name);
      }

      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
