import { Metadata } from 'next'
import LoginClient from "@/app/(payload)/admin/login/LoginClient";

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login to your account',
}

export default function LoginPage() {
    return <LoginClient />
}