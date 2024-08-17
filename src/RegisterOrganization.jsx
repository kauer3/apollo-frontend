import { Input } from "@/components/ui/input";

function RegisterOrganization() {

  return (
    <>
      <main className="grid w-screen h-screen place-content-center gap-5">
        <div className="flex flex-col gap-10 items-center w-fit">
          <div className="grid grid-cols-4 items-center gap-x-4 gap-y-2">
            <span>Name</span>
            <Input type="text" className="col-span-3"/>
            <span>Address</span>
            <Input type="text" className="col-span-3"/>
            <span>Registration</span>
            <Input type="text" className="col-span-3"/>
            <span>Supervisor</span>
            <Input type="text" className="col-span-3"/>
            <span>Phone Number</span>
            <Input type="tel" className="col-span-3"/>
            <span>Email</span>
            <Input type="email" className="col-span-3"/>
            <span>Password</span>
            <Input type="password" className="col-span-3"/>
            <span>Confirm Password</span>
            <Input type="password" className="col-span-3"/>
          </div>
          <button className="w-1/4 bg-inverted-background text-inverted-foreground text-xl px-4 py-2 rounded-lg">Register</button>
        </div>
      </main>
    </>
  )
}

export default RegisterOrganization;