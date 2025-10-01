import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="p-6 space-y-4 max-w-md mx-auto">
      
      <h1 className="text-2xl font-bold">React Input Demo</h1>

      {/* Email input */}
      <InputDemo />
      
      {/* File input */}
      <InputFile />

      {/* Counter example */}
      <div className="flex items-center gap-3">
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
        <span className="text-lg">Count: {count}</span>
      </div>

      {/* Card component */}
      <LoginCard />
      
    </div> 
  )
}

export default App

export function InputDemo() {
  return (
    <Input
      type="email"
      placeholder="Email"
      className="max-w-sm"
    />
  )
}

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}

export function LoginCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}




