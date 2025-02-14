'use client';

import { createCustomer, CustomerState } from "@/app/lib/actions";
import { useActionState } from "react";

import Link from 'next/link';
import { Button } from '@/app/ui/button';

export default function Form() {
    const initialState: CustomerState = { message: null, errors: {} };
    const [state, formAction] = useActionState(createCustomer, initialState);
  
    return (
      <form action={formAction}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6 dark:bg-sky-950">
   
          {/* Customer Name */}
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <div className="relative mt-2 rounded-md dark:text-gray-500">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter customer name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="name-error"
                />
              </div>
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
  
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="relative mt-2 rounded-md dark:text-gray-500">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email address"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="email-error"
                />
              </div>
            </div>
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          {/* Customer Image url */}
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Image url
            </label>
            <div className="relative mt-2 rounded-md dark:text-gray-500">
              <div className="relative">
                <input
                  id="image_url"
                  name="image_url"
                  type="text"
                  placeholder="Enter customer image url"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="image_url-error"
                />
              </div>
            </div>
            <div id="image_url-error" aria-live="polite" aria-atomic="true">
              {state.errors?.image_url &&
                state.errors.image_url.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>


          <div aria-live="polite" aria-atomic="true">
            {state.message ? (
              <p className="mt-2 text-sm text-red-500 font-bold dark:text-orange-500 ">{state.message}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/customers"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create Customer</Button>
        </div>
      </form>
    );
  }
  
