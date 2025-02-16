"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Test credentials for now
    const credentials = {
      student: {
        email: 'student@example.com',
        password: 'password123'
      },
      faculty: {
        email: 'faculty@example.com',
        password: 'faculty123'
      }
    }

    // Check if credentials match faculty or student
    if (email === credentials.faculty.email && password === credentials.faculty.password) {
      console.log('Faculty sign in successful')
      router.push('/faculty')
    } else if (email === credentials.student.email && password === credentials.student.password) {
      console.log('Student sign in successful')
      router.push('/dashboard')
    } else {
      console.log('Invalid credentials')
      // Add error handling here
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <Button type="submit" className="w-full">Sign In</Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline">Forgot Password</Button>
        </CardFooter>
      </Card>
    </div>
  )
}