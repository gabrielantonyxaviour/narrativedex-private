import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

export const useZodForm = ({ schema, ...formConfig }) => {
  return useForm({
    ...formConfig,
    resolver: zodResolver(schema)
  })
}

export const FieldError = ({ name }) => {
  const {
    formState: { errors }
  } = useFormContext()
  if (!name) return null
  const error = errors[name]
  if (!error) return null

  return (
    <div className="mt-1 text-sm font-bold text-red-500">{error.message}</div>
  )
}

export const Form = ({ form, onSubmit, children, className = '' }) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset
          className={`flex flex-col ${className}`}
          disabled={form.formState.isSubmitting}
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  )
}
