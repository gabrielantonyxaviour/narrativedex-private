import { Spinner } from '@components/UI/Spinner'

const Loader = ({ message }) => {
  return (
    <div className="p-5 space-y-2 font-bold text-center">
      <Spinner size="md" className="mx-auto" />
      <div>{message}</div>
    </div>
  )
}

export default Loader
