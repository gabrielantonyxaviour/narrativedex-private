import { Spinner } from './Spinner'

export const PageLoading = ({ message }) => {
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="space-y-3">
        <Spinner className="mx-auto" />
        <div>{message}</div>
      </div>
    </div>
  )
}
